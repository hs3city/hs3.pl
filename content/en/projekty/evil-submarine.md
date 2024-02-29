---
title: "Evil Submarine"
tags: ["hackerspace", "games", "hardware", "Arduino", "Raspberry Pi", "LED", "WS2812", "Game Jam", "Hack Jam", "submarine"]
featureImage: /images/projekty/evil-submarine/a1-big.jpeg
---


# Evil Submarine

The story started a few days before HackJam: Hackerspace Game Jam that was a part of Global Game Jam. We knew we wanted to work together on a project but we had no idea what would it be other than "no PC, please".

We started with collecting some stuff we wanted to use. Addressable LEDs? Sure thing! A replica of a 70s computer along with a CRT display? You betcha! A washing machine control panel with Arduino? YES!

All of that stuff, along with assorted cables, soldering irons, and so on fitted into 5 or 6 crates, so our neighbours at the Game Jam were a bit... intimidated by our spreading.

Then came the Friday evening when we officially learned this year's theme. Make me laugh. OK, brainstorming time to figure out how to fit all of our junk into this topic. I think it was KK who suggested that "laugh" doesn't have to mean laugh of joy. There's also evil laughter common with action movie villains.

So, this was our topic. We are minions of an evil overlord that wants to take control over the world and we want to make him laugh maniacally. Well, maybe not us per se, but the protagonist of our game. Our task was to build a submarine for the protagonist from the stuff we lugged there.

We started assembly on Friday and made initial progress on the overall "game engine". The main things were to setup Raspberry Pi, make sure it'd communicate with the peripheral microcontrolers, and make sure we could play the cutscenes (using VLC) from the main logic.

With PiDP11 conquered (around Saturday afternoon), we could focus on other things. We came up with some brief description for the plot and the mini games we wanted to implement and we were ready to start coding and assembling them (not as in aseembly language, but actual proper physical assembly). 

From the software architecture perspective, PiDP11 with a Raspberry Pi brain acted as the hub of our operations and ran the main game code. It was responsible for playing the cutscenes that we've recorded and dubbed on site and for turning on and communicating with the peripherals. PiDP11 used an old monochrome Unitra Neptun CRT display for additional immersion.

Each minigame is coded on its own microcontroller. If you want to, you can just play a single mini-game using a serial terminal, and this feature was in fact used to easily prototype and debug each minigame on its own. Hexagonal architecure that we deserve.

The enclosure of PiDP11 is also part of the game as it's LEDs and switches are part of the first mini-game or puzzle. Player has to turn on all the lights but some switches turn some on and some off. It's not a straightforward job.

When this is done, the next puzzle focuses on the washing machine panel. All communication between Raspberry Pi and peripherals is done over old-school 115200baud serial. Panel is controlled by Arduino Nano and everything there is hackable: the rotary encoder, the diodes, the buttons, the whole shebang.

After that, the player's task is to manipulate one of the waves on the oscilloscope to match the shape of a reference wave. Again, oscilloscope inputs are driven by Arduino Nano (a differnt one this time) while the controller is the washing machine panel.

And now, comes the final part. The same oscilloscope is used as a sonar display, while a display made of 4 P5 64x32 HUB75 LED panels (for a total screen resolution of 128x64) shows as the view from the periscope (that's made from cardboard and attached to our sub's hull). You steer using the washing machine panel and enemy ships appear on both screens. When you eliminate all of them, you win the game.

The submarine is powered by a 4-core nuclear reactor which in our case means 4 strings of 100 WS2812B LEDs encased in 4 huge water bottles. These are controlled by a Raspberry Pi Pico and Adafruit Qt Py RP2040.

There's also another oscilloscope, and two wave generators, soldering iron, cables, a loudspeaker, a few discarded PCBs, and some other stuff we thought will look cool.

Apart from the electronic stuff, there's also a bespoke cardboard hull with ornaments by our amazing 2D/3D/UI/UX designer for even more immersive experience. And there's an authentic sodium street lamp acting as radiation from the bomb. 1980s Retro Thorn Beta 5 MK16 SOX Sodium Street Light from UK for all interested.

We thought that creating a HW-based game in 48 hours would be very hard. And in the hindsight, we were right about it. It was very hard but also enormously satisfying.

We didn't manage to implement a lot of other stuff that we planned and even some pieces we had ready weren't properly integrated. But that didn't matter as the results were still pretty impressive and other contestants enjoyed our game.

The code for Arduinos, the HUB75 LED display, and for PiDP11 was written in C and C++. The code for the reactors lights was written in CircuitPython.



## Authors:

    - Michał "Traq" Zuchowski
    - Aleksandra "Xellas" Krzyszewska
    - Krzysztof "KK" Kluczek 
    - Piotr "DoomHammer" Gaczkowski
    - Leszek Miotk 



