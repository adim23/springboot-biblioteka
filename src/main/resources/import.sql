CREATE TABLE accounts(
id serial primary key,
username text not null,
password text not null,
role text not null
);

CREATE TABLE people(
id serial primary key,
id_account integer not null,
firstname text,
secondname text
);

CREATE TABLE books(
id serial primary key,
title text not null,
id_author integer not null
);

CREATE TABLE authors(
id serial primary key,
author text not null
);

INSERT INTO accounts(username, password, role) VALUES ('administrator', 'administrator', 'ROLE_ADMIN');
INSERT INTO accounts(username, password, role) VALUES ('biblioteka', 'biblioteka', 'ROLE_WORKER');
INSERT INTO accounts(username, password, role) VALUES ('jankowalski', 'jankowalski', 'ROLE_USER');

INSERT INTO people(id_account, firstname, secondname) VALUES (1, 'Administator', 'Biblioteki');
INSERT INTO people(id_account, firstname, secondname) VALUES (2, 'Pracownik', 'Biblioteki');
INSERT INTO people(id_account, firstname, secondname) VALUES (3, 'Jan', 'Kowalski');


INSERT INTO authors(author) VALUES ('Bolesław Prus');
INSERT INTO authors(author) VALUES ('Henryk Sienkiewicz');
INSERT INTO authors(author) VALUES ('Adam Mickiewicz');
INSERT INTO authors(author) VALUES ('Andrzej Sapkowski');
INSERT INTO authors(author) VALUES ('Dmitry Glukhovsky');
INSERT INTO authors(author) VALUES ('Howard Phillips Lovecraft');
INSERT INTO authors(author) VALUES ('Johann Wolfgang von Goethe');

INSERT INTO books(title, id_author) VALUES ('Faraon', 1);
INSERT INTO books(title, id_author) VALUES ('Lalka', 1);
INSERT INTO books(title, id_author) VALUES ('Kamizelka', 1);

INSERT INTO books(title, id_author) VALUES ('W pustyni i w puszczy', 2);
INSERT INTO books(title, id_author) VALUES ('Quo vadis', 2);
INSERT INTO books(title, id_author) VALUES ('Potop', 2);
INSERT INTO books(title, id_author) VALUES ('Krzyżacy', 2);
INSERT INTO books(title, id_author) VALUES ('Ogniem i mieczem', 2);

INSERT INTO books(title, id_author) VALUES ('Pan Tadeusz', 3);
INSERT INTO books(title, id_author) VALUES ('Konrad Wallenrod', 3);
INSERT INTO books(title, id_author) VALUES ('Sonety krymskie', 3);
INSERT INTO books(title, id_author) VALUES ('Dziady cz. 3', 3);

INSERT INTO books(title, id_author) VALUES ('Ostatnie życzenie', 4);
INSERT INTO books(title, id_author) VALUES ('Miecz przeznaczenia', 4);
INSERT INTO books(title, id_author) VALUES ('Krew elfów', 4);
INSERT INTO books(title, id_author) VALUES ('Czas pogardy', 4);
INSERT INTO books(title, id_author) VALUES ('Chrzest ognia', 4);
INSERT INTO books(title, id_author) VALUES ('Wieża Jaskółki', 4);
INSERT INTO books(title, id_author) VALUES ('Pani Jeziora', 4);

INSERT INTO books(title, id_author) VALUES ('Metro 2033', 5);
INSERT INTO books(title, id_author) VALUES ('Metro 2034', 5);
INSERT INTO books(title, id_author) VALUES ('FUTU.RE', 5);

INSERT INTO books(title, id_author) VALUES ('Zew Cthulhu', 6);

INSERT INTO books(title, id_author) VALUES ('Cierpienia młodego Wertera', 7);
