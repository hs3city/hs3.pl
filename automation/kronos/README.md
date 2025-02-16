# Kronos

"My, my, look at the time!" ⏱

This script is used to read/write various information from the [Hackerspace Trójmiasto's Discord channel](https://discord.com/invite/GSTgYzU) and [hs3.pl](https://hs3.pl/) website. It can be run by the GitHub Action `Update calendar local` in [hs3.pl GitHub Actions tab](https://github.com/hs3city/hs3.pl/actions).

## Functionalities:

📆 read events from the Discord channel and generate event subpages to be posted on the [hs3.pl](https://hs3.pl/) website

## How to run the script locally?

Python 3.9 or greater is needed. If you'd like to learn more, I recommend [discord.py documentation](https://discordpy.readthedocs.io/en/stable/index.html) - a great source of knowledge about using Python for Discord!

1. Note that the script is in the `automations/kronos` subdirectory. The following steps should be executed there.

1. Using a virtual environment is recommended.

   ```
   # Create a virtual environment
   python -m venv venv

   # Activate the virtual environment
   # On Windows
   venv\Scripts\activate

   # On macOS and Linux
   source venv/bin/activate
   ```

1. Install required packages

   ```
   pip install -r requirements.txt
   ```

1. Get a [Discord HS3 bot access token](https://discordpy.readthedocs.io/en/stable/discord.html#discord-intro) from one of the hackerspace's members (hint: your best bet are members who contribute to this repo 😉)

1. Create a `.env` file in the KRONOS main directory

   ```
   DISCORD_TOKEN=<your_discord_token>
   ```

1. Run the app

   ```
   python bot.py
   ```

1. If script succeeded, the subpages were generated in the `hs3.pl` repository in your current directory.

1. If you want to make a commit with up to date events, follow the contributing guildelines in the [hs3.pl repo](https://github.com/hs3city/hs3.pl).
