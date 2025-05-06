import asyncio
import logging
import os
import sys
from pathlib import Path

import discord
from add_discord_events import add_discord_events
from delete_future_discord_events import delete_future_discord_events
from dotenv import load_dotenv
from pytz import timezone

# Relative path to Hugo website events directory
relative_event_dir = "../../content/pl/wydarzenia"
cwd = Path.cwd()
event_dir = (cwd / relative_event_dir).resolve()

load_dotenv(verbose=True)
discord_token = os.getenv("DISCORD_TOKEN")

# Logging configuration
logging.basicConfig(level=logging.INFO)

# Discord configuration
intents = discord.Intents.default()
client = discord.Client(intents=intents)

local_timezone = timezone("Europe/Warsaw")


async def connect_discord():
    logging.info("Starting Discord client...")
    connected = asyncio.Event()

    async def on_ready():
        connected.set()

    client.event(on_ready)
    await client.login(discord_token)
    asyncio.create_task(client.connect(reconnect=False))
    await asyncio.wait_for(connected.wait(), timeout=30.0)
    logging.info("Discord client started")


async def main():
    try:
        await connect_discord()

        delete_future_discord_events(event_dir, local_timezone)
        await add_discord_events(client, event_dir, local_timezone)
        logging.info("Successfully processed all Discord events")
        return 0

    except asyncio.TimeoutError:
        logging.error("Timeout while connecting to Discord")
        return 1
    except Exception as e:
        logging.error(f"Error during processing: {e}")
        return 2
    finally:
        if client.is_ready():
            await client.close()


if __name__ == "__main__":
    exit_code = asyncio.run(main())
    logging.info(f"Finished processing discord events, exit code: {exit_code}")
    sys.exit(exit_code)
