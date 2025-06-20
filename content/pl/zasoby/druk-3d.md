---
title: "Druk 3D w HS3"
tags: ["hackerspace", "hs3", "hardware", "druk 3d", "ender", "creality", "k1max", "elegoo", "neptune"]
---

# Druk 3D

## Nasze drukarki

- **Creality Ender 3** – klasyczna, sprawdzona drukarka, idealna do prostych wydruków z PLA/PETG. Stan: domyślnie sprawna.
- **Creality K1 Max** – nowoczesna, szybka drukarka z zamkniętą komorą, duże pole robocze, obsługuje wiele materiałów. Stan: domyślnie sprawna. Pliki można wysyłać bezpośrednio po sieci (z OrcaSlicer lub przez panel webowy), nie trzeba używać karty SD/USB.
- **Elegoo Neptune 4 Pro** – szybka drukarka, dobra do wydruków i eksperymentów. Stan: domyślnie sprawna.

Aktualny stan drukarek najlepiej sprawdzić na miejscu lub zapytać na Discordzie  – jeśli coś nie działa, zostaw info na kanale #druk-3d!

## Profile i oprogramowanie

Na laptopie **Hacklab-0x01** zainstalowane są:
- **OrcaSlicer** – główny slicer, posiada profile do wszystkich powyższych drukarek (Ender 3, K1 Max, Neptune 4 Pro)
- **Ultimaker Cura** – skonfigurowany pod Endera 3
- **Prusa Slicer** – skonfigurowany pod Endera 3

Profile do wszystkich drukarek są dostępne w OrcaSlicerze (wybierz odpowiednią drukarkę i profil w programie). Jeśli chcesz dodać własny profil – skonsultuj się z ekipą!

## Przygotowanie

- Skopiuj pliki STL które chcesz wydrukować na laptopa, uruchom wybrany slicer i umieść modele na polu roboczym
- Użyj profili które zostały przygotowane w slicerach, jeśli ustawienia Cię zadowalają to potnij model (czyli stwórz gcode do drukarki)
- Sprawdź jaki będzie czas druku i ile filamentu zostanie zużyte; dorzuć do kasetki na filament odpowiednią kwotę
- Skopiuj gcode na kartę SD/USB **lub** (dla K1 Max) wyślij plik bezpośrednio po sieci
- Uwaga: adapter microSD->SD ma przełącznik z zabezpieczeniem zapisu który lubi zmieniać swoje położenie, może być potrzeba przełączyć go w pozycję niezabezpieczoną

## OrcaSlicer

- Wybierz drukarkę (Ender 3, K1 Max, Neptune 4 Pro) z listy profili
- Załaduj model, ustaw parametry (możesz wybrać profil: szybki, zbalansowany, dokładny)
- Wygeneruj G-code
- Dla K1 Max możesz wysłać plik bezpośrednio po sieci (przycisk "Wyślij do drukarki"), dla pozostałych zapisz na kartę SD/USB

## Prusa Slicer

- Umieść obiekt na stole roboczym
- W oknie po prawej znajdź rozwijalną listę "Printer" (1) i wybierz z niej jeden z profili FAST, BALANCED lub QUALITY
- Teraz powyżej znajdź listę "Printer settings" (2) i wybierz odpowiednią wysokość warstwy do powyższego profilu 
- Na koniec znajdź listę "Filament" (3) i wybierz odpowiedni materiał
- Naciśnij "Export G-code" i zapisz go na karcie pamięci

## Cura

- Wybierz drukarkę (Ender 3) z listy profili
- Załaduj model, ustaw parametry (możesz wybrać profil: szybki, zbalansowany, dokładny)
- Wygeneruj G-code i zapisz na kartę SD/USB

## Załadowanie filamentu

- Jeżeli drukarka nie ma załadowanej szpuli z filamentem, należy zrobić to samodzielnie przed wydrukiem
- Wybierz odpowiedni rodzaj filamentu pod swoje potrzeby (np. PLA lub PET-G)
- Wejdź w ustawienia drukarki i znajdź opcję 'Load Filament' - po jej wybraniu głowica drukarki rozpocznie nagrzewanie do odpowiedniej temperatury pod wybrany filament
- Obetnij końcówkę filamentu pod ostrym kątem - dzięki temu proces wprowadzania filamentu do ekstrudera będzie łatwiejszy
- Nałóż szpulę z filamentem, odegnij klips ekstrudera i zacznij wprowadzać filament aż poczujesz opór
- Jeśli z dyszy wydobywa się załadowany filament proces został zakończony - drukarka jest gotowa do pracy
- Jeśli dysza drukuje w innym kolorze, możliwe, że to resztka poprzedniego filamentu. Wtedy wystarczy pozwolić mu wypływać tak długo aż do dyszy dojdzie nasz załadowany materiał

## Druk

- Spryskaj stół IPA i dokładnie wytrzyj papierowym ręcznikiem
- Spryskaj stół klejem (np. dimafix) z dużej odległości (to ma być mgiełka, nie zalany stolik)
- Włącz drukarkę (przycisk z tyłu po lewej lub prawej)
- Na ekranie wybierz print i znajdź swój model
- Poczekaj grzecznie aż wydruk się skończy
    - Jeśli pierwsza warstwa będzie się odklejać przeprowadź poziomowanie stołu (o szczegóły pytaj na kanale #druk-3d)
- Poczekaj aż stół ostygnie poniżej 40 stopni
- Zdejmij swój model ze stołu używając do tego szpatułki (musisz zrobić to ostrożnie!)
- Wyczyść stół przy pomocy IPA i ręczników papierowych
- Wyłącz drukarkę dopiero gdy głowica będzie miała poniżej 65 C. lub pozostaw drukarkę włączoną

## Schemat drukarki 3D Ender

![Schemat drukarki 3D Ender](/images/zasoby/3d-printer-ender-schema.jpg)
![Schemat drukarki 3D Creality K1 Max](/images/zasoby/3d-printer-creality-k1-max.png)
![Schemat drukarki 3D Elegoo Neptune 4 Pro](/images/zasoby/3d-printer-elegoo-neptune-4-pro.png)
