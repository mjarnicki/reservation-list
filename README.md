# Mały projekt z listą rezerwacji. Użyty Ionic bazujący na Angularze.

## Komentarz

Poza odwzorowaniem projektu dorobiłem też kilka funkcjonalności, żeby potestować zapytania na json serwerze. Dzięki temu lista jest w pełni funkcjonalna z poziomu interfejsu. Można ją modyfikować bez konieczności edycji pliku. Poza tym dałem loader i alert. Zrobiłem też drobną optymaliację w postaci zapisu słownika do local-storage. Jeżeli chodzi o wygląd, to kilka elementów można by jescze doszlifować i poprawić strukture plików CSS. Generalnie Ionic bardzi mi się podoba. Dzięki komponentom sporo funkcjonalności można stosunkowo łatwo dodać, chociaż stylowanie nie należy do bardzo intuicyjnych, przynajmniej na początku. 

## Uruchomienie

Po ściągnięciu repozytorium konieczne jest uruchomienie testowej bazy danych, oraz samego projektu. Bazę uruchamia się wpisując **json-server --watch db.json** w folderze głównym. Projekt natomiast w folderze "ionic-reservation-list" wpisując "ionic s"

