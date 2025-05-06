import datetime
import logging

import yaml


def delete_future_discord_events(event_dir):
    today = datetime.date.today()
    logging.info(f"Current date: {today}, deleting future Discord events...")

    for year_dir in event_dir.glob("*"):
        if not year_dir.is_dir() or not year_dir.name.isdigit():
            continue

        for month_dir in year_dir.glob("*"):
            if not month_dir.is_dir() or not month_dir.name.isdigit():
                continue

            for day_dir in month_dir.glob("*"):
                if not day_dir.is_dir() or not day_dir.name.isdigit():
                    continue

                try:
                    event_date = datetime.date(
                        int(year_dir.name), int(month_dir.name), int(day_dir.name)
                    )
                except ValueError as e:
                    logging.warning(
                        f"Invalid date format: {year_dir.name}-{month_dir.name}-{day_dir.name}: {e}"
                    )
                    continue

                # Ignore today's events, even if they were deleted,
                # otherwise we may remove an event that was already finished (and was removed automatically in Discord)
                if event_date <= today:
                    continue

                for event_file in day_dir.glob("*.md"):
                    is_discord_event = False

                    try:
                        with open(event_file, "r", encoding="utf-8") as f:
                            content = f.read()

                        if content.startswith("---"):
                            _, front_matter, _ = content.split("---", 2)
                            metadata = yaml.safe_load(front_matter)
                            if metadata and "discord_event" in metadata:
                                is_discord_event = True

                        if is_discord_event:
                            logging.info(f"Deleting Discord event '{event_file}'")
                            event_file.unlink()
                        else:
                            logging.info(f"Ignoring non-Discord event '{event_file}'")

                    except Exception as e:
                        logging.error(f"Error processing event '{event_file}': {e}")
                        raise

    logging.info("Done deleting future Discord events")
