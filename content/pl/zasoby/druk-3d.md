---
title: "Drukarki 3D"
tags: ["hackerspace", "hs3", "hardware", "druk 3d", "ender", "creality"]
featureImage: /images/zasoby/3d-printers.png
---

### Savoir vivre korzystania z drukarek

W HS3 znajduje się kilka drukarek 3D, z których może skorzystać każdy. Prośba jednak o szanowanie sprzętu tak, by mógł służyć nam jak najdłużej. 🤗 Jeżeli brak Ci pewności w obsłudze drukarki na [kanale Discord HS3](https://discord.com/channels/762566311930101761/908768110960599040) znajdziesz wiele doświadczonych osób, które chętnie udzielą pomocy przy wydruku.

### Filamenty w HS3

Jeżeli chcesz skorzystać z filamentu znajdującego się w HS3, zostaw datek za zużyty filament w kasetce 'FILAMENTY'. Jeśli nie wiesz jak wycenić wydruk, również możesz zadać takie pytanie na [kanale Discord HS3](https://discord.com/channels/762566311930101761/908768110960599040).

### Przygotowanie modelu 3D do wydruku

- Na laptopie Hacklab-0x01 zainstalowany jest slicer Ultimaker Cura oraz Prusa Slicer, które są skonfigurowane pod drukarkę Ender (zobacz punkty poniżej odnoszące się do konkretnych programów)
- skopiuj pliki STL które chcesz wydrukować na laptopa, uruchom wybrany slicer i umieść modele na polu roboczym
- użyj profili które zostały przygotowane w obu slicerach, jeśli ustawienia Cię zadowalają to potnij model (czyli stwórz gcode do drukarki)
- sprawdź jaki będzie czas druku i ile filamentu zostanie zużyte; dorzuć do kasetki na filament odpowiednią kwotę
- skopiuj gcode na kartę SD. Uwaga: adapter microSD->SD ma przełącznik z zabezpieczeniem zapisu który lubi zmieniać swoje położenie, może być potrzeba przełączyć go w pozycję niezabezpieczoną

#### Prusa Slicer

- umieść obiekt na stole roboczym
- w oknie po prawej znajdź rozwijalną listę "Printer" (1) i wybierz z niej jeden z profili FAST, BALANCED lub QUALITY
- teraz powyżej znajdź listę "Printer settings" (2) i wybierz odpowiednią wysokość warstwy do powyższego profilu 
- na koniec znajdź listę "Filament" (3) i wybierz odpowiedni materiał
- naciśnij "Export G-code" i zapisz go na karcie pamięci

#### Cura
#TODO

### Instrukcja korzystania z drukarki Creality Ender 3

#### Schemat drukarki 3D

![Schemat drukarki 3D Ender](/images/zasoby/3d-printer-ender-schema.jpg)

#### Załadowanie filamentu

- jeżeli drukarka nie ma załadowanej szpuli z filamentem, należy zrobić to samodzielnie przed wydrukiem
- wybierz odpowiedni rodzaj filamentu pod swoje potrzeby (np. PLA lub PET-G)
- wejdź w ustawienia drukarki i znajdź opcję 'Load Filament' - po jej wybraniu głowica drukarki rozpocznie nagrzewanie do odpowiedniej temperatury pod wybrany filament
- obetnij końcówkę filamentu pod ostrym kątem - dzięki temu proces wprowadzania filamentu do ekstrudera będzie łatwiejszy
- nałóż szpulę z filamentem, odegnij klips ekstrudera i zacznij wprowadzać filament aż poczujesz opór
- jeśli z dyszy wydobywa się załadowany filament proces został zakończony - drukarka jest gotowa do pracy
- jeśli dysza drukuje w innym kolorze, możliwe, że to resztka poprzedniego filamentu. Wtedy wystarczy pozwolić mu wypływać tak długo aż do dyszy dojdzie nasz załadowany materiał

#### Druk

- spryskaj stół IPA i dokładnie wytrzyj papierowym ręcznikiem
- spryskaj stół klejem (np. dimafix) z dużej odległości (to ma być mgiełka, nie zalany stolik)
- włącz drukarkę (przycisk z tyłu po lewej)
- na ekranie wybierz print i znajdź swój model
- poczekaj grzecznie aż wydruk się skończy
    - jeśli pierwsza warstwa będzie się odklejać przeprowadź poziomowanie stołu (o szczegóły pytaj Daniela)
- poczekaj aż stół ostygnie poniżej 40 stopni
- zdejmij swój model ze stołu używając do tego szpatułki
- wyczyść stół przy pomocy IPA i ręczników papierowych
- wyłącz drukarkę dopiero gdy głowica będzie miała poniżej 65 C. lub pozostaw drukarkę włączoną

### Instrukcja korzystania z drukarki Creality K1 Max
#### Schemat drukarki 3D
#TODO

### Instrukcja korzystania z drukarki Anycubic Photon
#### Schemat drukarki 3D
#TODO

### Instrukcja korzystania z drukarki HEVO
#### Schemat drukarki 3D
#TODO
