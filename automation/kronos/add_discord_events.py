import logging

import yaml
from pytz import timezone
from sanitize import remove_emoji, sanitize

local_timezone = timezone("Europe/Warsaw")


class MyDumper(yaml.Dumper):
    def increase_indent(self, flow=False, indentless=False):
        return super(MyDumper, self).increase_indent(flow, False)


def _process_event(event, event_dir):
    logging.info(f"Proicessing event: {event.name}...")
    logging.info(
        f"Creator: {event.creator} [{event.creator_id}], description: {event.description}, time: {event.start_time}"
    )
    start_time = event.start_time.astimezone(local_timezone)
    end_time = event.end_time.astimezone(local_timezone)

    front_matter = {
        "title": remove_emoji(event.name),
        "tags": ["hs3"],
        "outputs": ["html", "calendar"],
        "discord_event": {
            "id": event.id,
            "link": event.url,
            "interested": event.user_count,
            "organizer": event.creator.name,
            "location": event.location,
        },
        "eventInfo": {
            "dates": {
                "extra": {
                    f"{start_time.strftime('%Y-%m-%d %H:%M')}-{end_time.strftime('%H:%M')}": None
                }
            }
        },
    }

    if event.cover_image:
        front_matter["featureImage"] = event.cover_image.url

    file_content = f"""\
---
{yaml.dump(front_matter, Dumper=MyDumper, sort_keys=False, allow_unicode=True)}
---

{event.description or ""}
"""
    logging.info(f"Event file data:\n{file_content}")

    date_path = event_dir.joinpath(start_time.strftime("%Y/%m/%d"))
    filename = f"{start_time.strftime('%Y-%m-%d')}-{sanitize(event.name)}.md"
    file_path = date_path / filename

    try:
        date_path.mkdir(parents=True, exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(file_content)
        logging.info(f"Created event file '{file_path}'")
    except Exception as e:
        logging.exception(f"Failed to write '{file_path}': {str(e)}")
        raise


async def add_discord_events(client, event_dir):
    for guild in client.guilds:
        logging.info(f"Scraping guild: {guild.name}")

        for event in guild.scheduled_events:
            event = await guild.fetch_scheduled_event(event.id)
            _process_event(event, event_dir)
