---
layout: blog
title: Jak dodać nowy post na stronę hackerspace poprzez Decap CMS?
featureImage: /images/zasoby/decap-cms.png
category:
  - dokumentacja
---
### Wstęp

Strona [hs3.pl](https://hs3.pl/) jest stworzona w [Hugo](https://gohugo.io/), a hostowana w [Netlify](https://www.netlify.com/). Edytować można ją bezpośrednio w repozytorium z kodem źródłowym strony: [hs3city/hs3.pl](https://github.com/hs3city/hs3.pl).

Jednak istnieje również opcja wykorzystania [GUI](https://pl.wikipedia.org/wiki/Graficzny_interfejs_u%C5%BCytkownika) przy użyciu narzędzia do zarządzania treści [Decap CMS](https://decapcms.org/). W taki sposób można dodawać nowe posty do dwóch zakładek (zarówno w wersji polskiej, jak i angielskiej):

* <https://hs3.pl/projekty/>
* <https://hs3.pl/zasoby/>

### Dodanie nowego postu krok po kroku

1. **(Wymaganie wstępne)** Stwórz konto na <https://github.com/> Będzie Ci potrzebne do autoryzacji. Jednak nie martw się! By edytować posty tą metodą, nie musisz mieć wiedzy o kodzie źródłowym strony Hackerspace.
2. Wejdź do panelu administracyjnego strony hs3: <https://hs3.pl/admin/>
3. Zaloguj się poprzez swoje konto GitHub. Jeżeli wszystko poszło dobrze, zobaczysz panel z czterema 'Collections' do wyboru. Odpowiadają one zakładce projekty i zasoby na stronie Hackerspace w wersji polskiej i angielskiej.
4. Jeżeli chcesz dodać nowy post w danej kolekcji wybierz przycisk 'New <nazwa kolekcji>'
5. Możesz tu również edytować istniejące posty, wybierając je z listy.
6. Wprowadź zmiany w tytule i opisie postu. Opcjonalnie, dodaj zdjęcie - okładkę. Na koniec dodaj pasujące tagi i kategorię. 
7. Zapisz post - pojawi się on jako nowy 'Draft'. Zobaczysz aktualny status posta w panelu u góry ⬆. Możesz go też sprawdzić w zakładce [Workflow](https://hs3.pl/admin/#/workflow)[](https://hs3.pl/admin/). Na razie post widoczny jest tylko dla Ciebie.
8. Gdy chcesz zmień status na 'In review'. Pojawi się on wtedy jako Pull Request[](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) w repozytorium Hackerspace: <https://github.com/hs3city/hs3.pl/pulls>
9. Netlify automatycznie stworzy wersję poglądową strony z Twoimi zmianami. Możesz tam zobaczyć swój nowo dodany post. Jeśli stwierdzisz, że chcesz go poprawić, zawsze możesz kontynuować edycję w Decap CMS. Twoje zmiany w Pull Requeście będą się na bieżąco aktualizować.[](https://github.com/hs3city/hs3.pl/pulls)
10. Gdy wszystko jest gotowe poproś osobę o odpowiednich uprawnieniach o review i merge Twojego Pull Requesta. Możesz to zrobić na [Discordzie Hackerspace](https://discord.com/channels/762566311930101761/1112390625044734044). 
11. Po merge'u PR Twój post pojawi się na produkcyjnej wersji strony [hs3.pl](https://hs3.pl/). Powinno nastąpić to niemal od razu po zmerge'owaniu. 🥳
12. **(Uwaga dla programistów)** Decap CMS automatycznie tworzy fork repozytorium [hs3city/hs3.pl](https://github.com/hs3city/hs3.pl) na Twoim koncie GitHub, a gdy korzystasz z GUI wprowadza na nim odpowiednie zmiany. Gdy tworzysz draft postu, tworzy nowy branch, a gdy zmieniasz jego status na 'In review' otwiera PR na repo [hs3city/hs3.pl](https://github.com/hs3city/hs3.pl). Wszystko możesz sobie zobaczyć ze swojego konta GitHub i w razie problemów z GUI kontynuować pracę tam. A gdy chcesz już zakończyć pracę ze stroną Hackerspace Trójmiasto, możesz bezpiecznie usunąć swój fork.[](https://hs3.pl/admin/)


### Pytania i uwagi

Wszelkie pytania i uwagi odnośnie działania Decap CMS na stronie hs3.pl można kierować do [Marty Sienkiewicz](https://github.com/MartaSien).
