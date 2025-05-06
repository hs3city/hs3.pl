import logging

import yaml
from sanitize import remove_emoji, sanitize


async def add_discord_events(client, event_dir, local_timezone):
    for guild in client.guilds:
        logging.info(f"Processing guild: {guild.name}")

        for event in guild.scheduled_events:
            event = await guild.fetch_scheduled_event(event.id)
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
                    "location": event.location or "Online",
                },
                "eventInfo": {
                    "dates": {
                        "extra": {
                            f"{start_time.strftime('%Y-%m-%d %H:%M')}-{end_time.strftime('%H:%M')}": None
                        }
                    }
                },
            }

            # Add cover image if available
            if event.cover_image:
                front_matter["featureImage"] = event.cover_image.url

            # Prepare the complete file content
            class MyDumper(yaml.Dumper):
                def increase_indent(self, flow=False, indentless=False):
                    return super(MyDumper, self).increase_indent(flow, False)

            file_content = f"---\n{yaml.dump(front_matter, Dumper=MyDumper, sort_keys=False, allow_unicode=True)}---\n\n{event.description or ''}"

            # Create directory structure
            date_path = event_dir.joinpath(start_time.strftime("%Y/%m/%d"))
            filename = f"{start_time.strftime('%Y-%m-%d')}-{sanitize(event.name)}.md"

            try:
                date_path.mkdir(parents=True, exist_ok=True)
                with open(date_path / filename, "w", encoding="utf-8") as f:
                    f.write(file_content)
                logging.info(f"Created: {date_path}/{filename}")
            except Exception as e:
                logging.error(f"Failed to write {filename}: {str(e)}")
                raise
