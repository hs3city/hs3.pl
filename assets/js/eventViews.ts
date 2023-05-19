if (!(globalThis as any).eventViewsRun) {
  (globalThis as any).eventViewsRun = true;

  function createEventViews() {
    document.querySelectorAll(".eventDates").forEach(
      el => createEventViewsForDiv(el as HTMLDivElement))
  }

   interface BaseEvent {
    element: HTMLElement;
    startdt: number;
    enddt: number;
    cancelled: boolean;
    comment: string | undefined;
  }
  interface ShortEvent extends BaseEvent {};

  interface LongEvent extends BaseEvent {
    title: string;
    description: string;
    url: string;
    image: string | undefined;
  }

  function createEventViewsForDiv(parentElement: HTMLDivElement) {
    const events: (ShortEvent | LongEvent)[] = [...parentElement.querySelectorAll(".h-event")].map(el => {
      const element = el as HTMLElement;
      const startdt = Date.parse((el.querySelector(".dt-start") as HTMLTimeElement).dateTime);
      const enddt = Date.parse((el.querySelector(".dt-end") as HTMLTimeElement).dateTime);
      const cancelled = !!el.querySelector(".cancelled");
      const comment = (el.querySelector(
      ".comment") as HTMLElement | null)?.innerText;
      if (el.classList.contains("long")) {
        const title = (el.querySelector(".p-name") as HTMLElement).innerText;
        const description = (el.querySelector(".p-description") as HTMLElement).innerText;
        const url = (el.querySelector(".u-url") as HTMLLinkElement).href;
        const image = (el.querySelector(".p-image") as HTMLImageElement | null)?.src;
        return {element, startdt, enddt, cancelled, comment, title, description, url, image};
      } else {
        return {element, startdt, enddt, cancelled, comment};
      }
    });

    const upcoming = document.createElement("div");
    upcoming.classList.add("upcoming")
    const ongoing = document.createElement("div");
    ongoing.classList.add("ongoing")
    const past = document.createElement("div");
    past.classList.add("past")

    const now = Date.now();
    events.forEach(event => {
      if (event.startdt > now) {
        upcoming.appendChild(event.element);
      } else if (event.enddt < now) {
        past.prepend(event.element); // past events are in reverse order
      } else {
        ongoing.append(event.element);
      }
    });
    parentElement.appendChild(past);
    parentElement.appendChild(ongoing);
    parentElement.appendChild(upcoming);
  }

  window.addEventListener("load", createEventViews)
}
