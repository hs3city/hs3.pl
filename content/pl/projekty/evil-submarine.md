---
title: "Evil Submarine"
tags: ["hackerspace", "gry", "hardware", "arduino", "Raspberry Pi", "LED", "WS2812", "Game Jam", "Hack Jam", "łódź podwodna"]
featureImage: /images/projekty/evil-submarine/a1-big.jpeg
---

[Intro]({{< ref "evil-submarine.md#intro" >}} "O projekcie") [Autorzy]({{< ref "evil-submarine.md#autorzy" >}} "Autorzy gry") [Fabuła]({{< ref "evil-submarine.md#fabuła" >}} "Fabuła gry") [Hardware]({{< ref "evil-submarine.md#hardware" >}} "Wykorzystywany sprzęt") [Software]({{< ref "evil-submarine.md#software" >}} "Wykorzystywane oprogramowanie") [Dziennik Pokładowy]({{< ref "evil-submarine.md#dziennik-pokładowy" >}} "Aktualności w postaci wpisów do dziennika pokładowego")


## Intro
W ramach HackJam: Hackerspace Game Jam zrobilismy grę wykorzystujacą stare sprzęty, które znaleźlimy w naszych garażach, piwnicach i w Hackerspace. 


## Autorzy 

    - Michał "Traq" Zuchowski
    - Aleksandra "Xellas" Krzyszewska
    - Krzysztof "KK" Kluczek 
    - Piotr "DoomHammer" Gaczkowski
    - Leszek Miotk 
    

    - ...
    - ... 
    - Tu może byc Twoje imię. 
Jesteśmy otwarci na rozbudowę gry o rózne moduły. Masz pomysł, który chciałbyś zrealizować? Odezwij się do nas na Discordzie Hackerspace Trójmiasto
    



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
  Kod na Arduino, wyświetlacz LED HUB75 i dla PiDP11 został napisany w C i C++. Kod na swiatła reaktora został napisany w CircuitPython


## Dziennik Pokładowy 
- [2024-03-01]({{< ref "evil-submarine.md#2024-03-01" >}} "Wpis z dnia 2024-03-01")
- [2024-02-28]({{< ref "evil-submarine.md#2024-02-28" >}} "Wpis z dnia 2024-02-28")

### 2024-03-01
Piątek. Tradycyjnie część ekipy postanowiła odpocząć, a część działać na naszą łodzią. 

Co zrobiliśmy: 

- Nowy kadłub, wymieniliśmy karton rufy.
- Nowe mocniejsze nitowanie, z każdej strony.
- Nowa kotwica ( postanowiliśmy, że to będzie miejsce na naklejki)
- Podłączyliśmy zasilanie na kluczyk
- Zawiesiliśmy sieć i nurka
- Poprawione małe bomby
- Łódź ma teraz okno bulaj za którym są rybki (duży potencjał na włożenia tam jakieś ekranu i wyświetlanie tego co w okolicy łodzi)
- Podłączyliśmy głośnik do generatora RC przez kabel BNC

Tip: Wiercenie w kartonie pod nity to dobry pomysł : )

### 2024-02-28

Popłynęliśmy nasza łodzią na konferencję [DevGAMM w Gdańsku](https://devgamm.com/gdansk2024/). Nasza gra przyciągała była bardzo popularna i wywoływała uśmiech na twarzy graczy. 

Kilka wypowiedzi uczestników konferencji: 

> To jest szalone i wspaniałe.
> 

> Czy to naprawdę panel od pralki?
> 

> Najlepsza gra na tej konferencji.
> 

> Jak to zrobiliście i dlaczego?
> 

> Skąd macie ten stary sprzęt?
> 

> Granie na fizycznych kontrolerach daje sporo frajdy.
> 

> Czy mogę zrobić zdjęcie?
> 

> Czy wrzucamy ją na platformę Steam?
> 
