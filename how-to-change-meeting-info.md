This document describes for meeting-owners how they can change their meetings.
Let's look at this (fictional) calendar for the picnic:

Please read [the technical documentation](calendar.md) in order to find all details (including how to make a new recurring meeting), this document is just the quick and dirty reference.

Note that the event info can be _either_ on the Polish language page, _or_ on the English page, not both. This also means that at the moment, there is no i18n support for the comments.

## Add an extra meeting

Under `eventInfo.dates` in the frontmatter, add (if it doesn't exist) a key for `extra`. Under this key, create a new key `2022-12-07 08:00-19:00` (change to your dates and times), and value either an empty string, or some comment you want to add to this meeting. You can make a meeting last past midnight if endtime < starttime (e.g. `2022-12-07 18:00-06:00`).

E.g.

```yaml
eventInfo:
  dates:
    extra:
      2022-12-07 18:00-19:00: This is an extra meeting
```

## Cancel a meeting

If the meeting you want to cancel is an extra (non-recurring) meeting, just remove the line for the meeting.

If it's a recurring meeting, under `eventInfo.dates` in the frontmatter, add (if it doesn't exist) a key for `cancelled`. Add underneath a key with the date (e.g. `2023-06-23`) and as value the reason for cancellation (or any other message, or an empty string).

E.g.

```yaml
eventInfo:
  dates:
    periodics:
      [...]
    cancelled:
      2022-12-30: "No meeting day before silvester"
```

## Change a meeting

If the meeting you want to cancel is an extra (non-recurring) meeting, just change the line for the meeting.

If it's a recurring meeting, under `eventInfo.dates` in the frontmatter, add (if it doesn't exist) a key for `changes`. Add underneath a key in one of the following forms, and as value the reason for the change (or any other message, or an empty string):

- `2022-05-04`: date by itself allows adding a message to an existing event
- `2022-05-04->2022-05-05`: `date->date` changes the date (but not the time)
- `2022-05-04->18:00-19:00`: `date->start-end` changes the time (but not the date)
- `2022-05-04->2022-05-05 18:00-19:00`: `date->date start-end` changes both the date and the time.

E.g.

```yaml
eventInfo:
  organizer:
    name: Hackerspace Trójmiasto
  dates:
    periodics:
      [...]
    changes:
      2022-10-28->2022-10-27: "moved because of planning issues"
      2022-12-30: bring 🍾
      2023-04-28->19:00-01:00: "starting a bit later"
      2023-10-27->2023-10-20 19:00-21:00: moved a week earlier, but later start time
```
