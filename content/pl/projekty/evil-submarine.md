---
title: "Evil Submarine"
tags: ["hackerspace", "gry", "hardware", "arduino", "Raspberry Pi", "LED", "WS2812", "Game Jam", "Hack Jam", "łódź podwodna"]
featureImage: /images/projekty/evil-submarine/a1-big.jpeg
---

[Intro]({{< ref "evil-submarine.md#Intro" >}} "O projekcie") [Autorzy]({{< ref "evil-submarine.md#Autorzy" >}} "Autorzy gry") [Fabuła]({{< ref "evil-submarine.md#Fabuła" >}} "Fabuła gry") [Hardware]({{< ref "evil-submarine.md#Intro" >}} "Wykorzystywany sprzęt") [Software]({{< ref "evil-submarine.md#Software" >}} "Wykorzystywane oprogramowanie") [Dziennik Pokładowy]({{< ref "evil-submarine.md#Dziennik Pokładowy" >}} "Aktualności w postaci wpisów do dziennika pokładowego")

## Intro
W ramach HackJam: Hackerspace Game Jam zrobilismy grę wykorzystujacą stare sprzęty, które znaleźlimy w naszych garażach, piwnicach i w Hackerspace. 


## Autorzy 

    Michał "Traq" Zuchowski, Aleksandra "Xella" Krzyszewska, Krzysztof "kk" Kluczyk, Piotr "DoomHammer" Gaczkowski, Leszek Miotk 


## Fabuła 

Jesteś członkiem szajki, która chce przejąć władzę nad światem. Dostajesz w dowodzenie atomowy okręt podwodny zbudowany w garażu. Twój boss - Mr Catstroke zdalnie przekazuje Ci instrukcje do kolejnych misji. Gdy wykonasz je wszystkie zyskasz chwałę na zawsze.

Na okręcie masz do dyspozycji różne mechaniczne przełączniki. Na początku musisz odblokować sterowanie statkiem. Do dyspozycji będziesz mieć panel sterowania z pralki, sonar z oscyloskopu, peryskop z kartonu, komputer pokładowy zrobioną z konsoli pdp11, reaktor z lampek choinkowych, centrum komunikacji z telewizora kuchennego.

Czeka na Ciebie wiele ciekawych zagadek. Pamiętaj, że ten sprzęt czasami się psuje. Do grania przyda się lutownica i kilometr przewodów. Wszystkie awarie, będziesz musiał naprawiać na bieżąco. Gdy już opanujesz podstawowe sterowanie czeka Ciebie bitwa z innymi okrętami. Wygraj ją, a nagroda Ciebie nie ominie.

Do dyspozycji na łodzi podwodnej masz:

- Silnikatoinator
- Rozmowoinator
- Wykrywator
- Podglądator
- Peryskopator
- Reaktator Czterowrdzeniowator
- Dyskietator
- Faloinator
- Sygnaloinator
- Kontrolator
- Bombator
- Izolatoinator
- Złączator

## Hardware
 - Replika PiDP11 z Raspberry Pi na pokładzie jako główny komputer, który sterował wszystkimi pozostałymi urządzeniami. Pełnił rolę huba i dystrubytora informacji.  
 - Wyświetlacz z 4 paneli ledowych P5 64x32 HUB75. Całkowita rozdzielczość 128x64, dyfuzor zrobiony z czarnego worka na śmieci.  
 - Kotroler z panelu pralki do prania. Sterowany przez Arduino Nano
 - TV 14" CRT Unitra Neptun
 - Arduino Nano do sterowania oscyloskopem
 - Oscyloskop 1  firmy Hung Chang model 5506 60 MHz 
 - Oscyloskop 2 ( popsuty jeden kanał)
 - Generator RC typ PO-23 
 - Generator RC typ PO-20 firmy zopan 
 - Raspberry Pi Pico do sterowania światełkami z choinki 
 - Adafruit Qt Py RP2040
 - 4 łańcuchy światełek choinkowych, każdy zrobiony ze 100 diód LED WS2812B
 - Sodowa lampa uliczna model Thorn Beta 5 MK16 SOX z UK 

## Software
  Kod na Arduino, wyświetlacz LED HUB75 i dla PiDP11 został napisany w C i C++. Kod na swiatła reaktora został napisany CircuitPython

## Dziennik Pokładowy 
- Todo 