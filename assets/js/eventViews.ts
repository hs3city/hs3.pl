const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const TZREGEX =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(([+-])(\d{2}):?(\d{2})|Z)$/;

if (!(globalThis as any).eventViewsRun) {
  (globalThis as any).eventViewsRun = true;

  function createEventViews() {
    document.querySelectorAll(".eventDates").forEach((el) => {
      fixTabs(el as HTMLDivElement);
      createEventViewsForDiv(el as HTMLDivElement);
      if (window.location.hash !== "") {
        const tabName = window.location.hash.slice(1)
        selectTab(el as HTMLDivElement, tabName)
      }
    });
  }

  interface BaseEvent {
    element: HTMLElement;
    startdt: number;
    startdtTzOffset: number;
    enddt: number;
    enddtTzOffset: number;
    cancelled: boolean;
    comment: string | undefined;
  }
  interface ShortEvent extends BaseEvent {}

  interface LongEvent extends BaseEvent {
    title: string;
    description: string;
    url: string;
    image: string | undefined;
  }

  function selectTab(parentElement: HTMLDivElement, tabToSelect: string) {
    const tabs = [
      ...parentElement.querySelectorAll(".grid-tab"),
    ] as HTMLElement[];
    const allTabs = tabs.map((el) => el.classList[1]);
    if (allTabs.indexOf(tabToSelect) === -1) {
      console.warn(
        `Cannot select tab ${tabToSelect}, does not exist in ${allTabs.join(", ")}`)
      return
    }
    allTabs.forEach((klass) => parentElement.classList.remove(klass));
    parentElement.classList.add(tabToSelect)
    window.location.hash = `#${tabToSelect}`
  }

  function fixTabs(parentElement: HTMLDivElement) {
    const tabs = [
      ...parentElement.querySelectorAll(".grid-tab"),
    ] as HTMLElement[];
    const all_classes = tabs.map((el) => el.classList[1]);
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        selectTab(parentElement, tab.classList[1])
      });
    });
  }

  function getTZOffsetMS(datestring: string): number {
    const [_, full_tz, sign, hours, minutes] = datestring.match(TZREGEX)!;
    if (full_tz == "Z") {
      return 0;
    }
    const isign = sign == "+" ? 1 : -1;
    const total_minutes = parseInt(hours) * 60 + parseInt(minutes);
    return isign * total_minutes * 60 * 1000;
  }

  function createEventViewsForDiv(parentElement: HTMLDivElement) {
    const events: (ShortEvent | LongEvent)[] = [
      ...parentElement.querySelectorAll(".h-event"),
    ].map((el) => {
      const element = el as HTMLElement;
      const startDateTimeString = (
        el.querySelector(".dt-start") as HTMLTimeElement
      ).dateTime;
      const startdt = Date.parse(startDateTimeString);
      const startdtTzOffset = getTZOffsetMS(startDateTimeString);
      const endDateTimeString = (el.querySelector(".dt-end") as HTMLTimeElement)
        .dateTime;
      const enddt = Date.parse(endDateTimeString);
      const enddtTzOffset = getTZOffsetMS(endDateTimeString);
      const cancelled = !!el.querySelector(".cancelled");
      const comment = (el.querySelector(".comment") as HTMLElement | null)?.innerText;
      if (el.classList.contains("long")) {
        const title = (el.querySelector(".p-name") as HTMLElement).innerText;
        const description = (el.querySelector(".p-description") as HTMLElement).innerText;
        const url = (el.querySelector(".u-url") as HTMLLinkElement).href;
        const image = (el.querySelector(".p-image") as HTMLImageElement | null)
          ?.src;
        return {
          element,
          startdt,
          startdtTzOffset,
          enddt,
          enddtTzOffset,
          cancelled,
          comment,
          title,
          description,
          url,
          image,
        };
      } else {
        return {
          element,
          startdt,
          startdtTzOffset,
          enddt,
          enddtTzOffset,
          cancelled,
          comment,
        };
      }
    });

    const upcoming = parentElement.querySelector(".grid-body.upcoming")!;
    const past = parentElement.querySelector(".grid-body.past")!;

    // Items are already put in the right position at generation time, this JS moves them to correct position
    // for view-time.
    const now = Date.now();
    events
      .sort((a, b) => a.startdt - b.startdt)
      .forEach((event) => {
        event.element.classList.remove("now");
        event.element.classList.remove("next24hrs");
        if (event.enddt < now) {
          past.prepend(event.element); // past events are in reverse order
        } else {
          upcoming.appendChild(event.element);
          if (event.startdt < now) {
            event.element.classList.add("now");
          } else if (event.startdt < now + ONE_DAY_MS) {
            event.element.classList.add("next24hrs");
          }
        }
      });
    const nowDate = new Date(now);
    setCalendar(parentElement, events, nowDate.getUTCFullYear(), nowDate.getMonth());
  }

  function setCalendar(
    parentElement: HTMLElement,
    events: (ShortEvent | LongEvent)[],
    year: number,
    month: number,
  ) {
    const date = new Date(year, month, 1); 
    const calendar = parentElement.querySelector(".grid-body.calendar")!;
    [...calendar.childNodes].forEach((el) => el.remove());
    calendar.appendChild(
      createCalendar(date.getFullYear(), date.getMonth(), events)
    );
    calendar.querySelector(".previous-month")?.addEventListener(
      "click", () => setCalendar(parentElement, events, year, month - 1))
    calendar.querySelector(".next-month")?.addEventListener(
      "click", () => setCalendar(parentElement, events, year, month + 1))
  }

  function getISOWeekNumber(date: Date): number {
    var newdate = new Date(date.getTime());
    newdate.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    newdate.setDate(newdate.getDate() + 3 - (newdate.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(newdate.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((newdate.getTime() - week1.getTime()) / 86400000
      - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  function createEl(props: {name?: string, classes?: string[]} & ({text?: string} | {children?: HTMLElement[]})): HTMLElement {
    const el = document.createElement(props.name ?? "div")
    if (props.classes) {
      props.classes.forEach(klass => el.classList.add(klass));
    }
    if ("text" in props && props.text !== undefined) {
      el.innerText = props.text;
    }
    if ("children" in props) {
      (props.children ?? []).forEach(child => el.appendChild(child))
    }
    return el
  }

  function eventIsOnDate(date: Date, event: ShortEvent | LongEvent): boolean {
    // eventDate UTC time is now siteLocal event time
    const eventDate = new Date(event.startdt + event.startdtTzOffset)
    return eventDate.getUTCFullYear() === date.getFullYear()
      && eventDate.getUTCMonth() === date.getMonth()
      && eventDate.getUTCDate() === date.getDate();
  }

  function toUTCTimeString(date: Date): string {
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0")
  }

  function createCalendar(
    year: number,
    month: number,
    events: (ShortEvent | LongEvent)[]
  ): HTMLDivElement {
    const first_day_of_month = new Date(year, month, 1);
    const calendar = createEl({classes: ["month-calendar"], children: [
      createEl({classes: ["header"], children: [
        createEl({name: "span", text: "\u25C0", classes: ["previous-month"]}),
        createEl({name: "span", text: first_day_of_month.toLocaleString(undefined, {month: "long", year: "numeric"}), classes: ["month-name"]}),
        createEl({name: "span", text: "\u25B6", classes: ["next-month"]}),
      ]}),
      createEl({classes: ["weeknumber"], text: "wk"})
    ]}) as HTMLDivElement;
    for (let i = 1; i < 8; i++) {
      const date = new Date(2023, /* May */ 4, i); // this month starts on Monday
      calendar.appendChild(createEl({
        classes: ["weekday-name"],
        text: date.toLocaleDateString(undefined, { weekday: "short" })
      }))
    }
    const today = new Date()
    const isToday = (date: Date): boolean => date.toDateString() == today.toDateString()
    const first_day_to_show = new Date(year, month, 1 - (first_day_of_month.getDay() + 6) % 7);
    let nrrows = 0;
    for (let i = 0; ; i++) {
      let date = new Date(
        first_day_to_show.getFullYear(), first_day_to_show.getMonth(), first_day_to_show.getDate() + i);
      let eventsThisDay = events.filter(event => eventIsOnDate(date, event))
      if ((i % 7) == 0) {
        nrrows = i / 7;
        if (i > 7 && date.getMonth() != month) {
          break;
        }
        calendar.appendChild(createEl({
          classes: ["weeknumber"],
          text: `${getISOWeekNumber(date)}`,
        }))
      }

      const day = createEl({classes: ["calendar-day"]})
      if (date.getMonth() != month) {
        day.classList.add("other-month")
      }
      if (isToday(date)) {
        day.classList.add("today")
      }
      const daynr = createEl({
        classes: ["daynumber"],
        text: `${date.getDate()}`,
      })
      day.appendChild(daynr)
      eventsThisDay.forEach(event => {
        const long = "title" in event;
        const slStartTime = new Date(event.startdt + event.startdtTzOffset)
        const slEndTime = new Date(event.enddt + event.enddtTzOffset)
        const title = long ? event.title : `- ${toUTCTimeString(slEndTime)}`;
        const el = createEl({name: (long ? "a" : "div"), classes: ["event"], text: `${toUTCTimeString(slStartTime)} ${title}`})
        if (long) {
          ;(el as HTMLLinkElement).href = event.url;
        }
        day.appendChild(el)
      })
      calendar.appendChild(day);
    }
    calendar.style.setProperty("--nr-week-rows", `${nrrows}`)
    return calendar;
  }

  window.addEventListener("load", createEventViews);
}
