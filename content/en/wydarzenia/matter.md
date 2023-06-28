---
title: "Matter for Makers; integrating home-built IoT devices into your Smart Home"
tags: ["hs3", "matter", "english"]
featureImage: /images/wydarzenia/matter.jpg
---

- Date: Thursday 17 August 2023, 19:00
- Duration: 2 hours; longer of we feel like it
- Presenter: Claude (@claude9134 on Discord)
- _The presentation will be done in English_

In October 2022, the Matter 1.0 standard was released.
The vision of Matter is to have one standard for home automation, where before many different standards existed (HomeKit, Google Home, Samsung SmartThings, Alex, etc).

(and yes, there is an ironclad law on the internet that anyone writing that sentence has to then display the following XKCD).

[![standards](https://imgs.xkcd.com/comics/standards_2x.png)](https://xkcd.com/927/).

(and when we all stop laughing, we realise that we are very happy that the developers of USB didn't get discouraged by this...)

In addition to making it easier for companies to get Smart Home hardware working on all platforms (they only need to go through the Matter certification once, rather than separate trajectories for HomeKit, Google Home, etc)), having an open standard like Matter is super interesting for Makers.
It allows development, in your home, of devices that integrate _properly_ in your Smart Home, just like a store-bought-china-made-rich-people-getting-richer device:

- You can use your normal Smart Home app to control them (e.g. use Apple Home on your iPhone), including voice control through Siri/Alexa.
- The device can be used in triggers (switch on/off when I come home / at a certain time)[^dependent].
- The device can be made part of scenes (e.g. "Movie Night" scene, switches on TV, sets lights to mood-lighting, etc).
- The device can react to other devices, or be a trigger to other devices (e.g. open the window when inside temperature > 25 and outside temperature < inside temperature)[^dependent].

During this workshop I will talk about Matter and Thread, and how you can get started as a maker to make some device.
We will have a Matter network available in the space, so that after the talk we can get hands-on.
We do have some devices available to play with (depending on the number of people attending).

## Level of the talk / workshop

I want to give a talk / workshop that is open to everyone, however there is a lot to cover on this subject, so we will need to move fast.
This is because although the Matter protocol is open and free, it's quite complex.
Therefore this talk will be less suited for people who are not comfortable with C, network technology and embedded devices.
If you are unsure if you will be able to follow along, please send me a PM.

Also if you would like to know more about Matter but are sure that this will go too fast for you, let me know.
Then we can make a plan for a talk/workshop that takes things a bit slower.

## Registration

Please register by sending me a PM on discord (@claude9134) before 15 August.


[^dependent]: Dependent on whether your home hub has support for this.


[1]: https://blog.claude.nl/posts/docker-on-m1-mac-performance/
