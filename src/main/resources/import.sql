CREATE TABLE accounts(
id serial primary key,
username text not null,
password text not null
);

CREATE TABLE people(
id serial primary key,
id_account integer not null,
firstname text,
secondname text
);

CREATE TABLE roles(
id serial primary key,
id_account integer not null,
role text not null
);

CREATE TABLE books(
id serial primary key,
title text not null,
id_author integer not null,
id_image integer not null
);

CREATE TABLE images(
id serial primary key,
path text not null default ''
);

CREATE TABLE copies(
id serial primary key,
id_book integer not null
);

CREATE TABLE loans(
id serial primary key,
id_person integer not null,
id_copy integer not null,
date_loaned timestamp not null,
returned boolean not null
);

CREATE TABLE authors(
id serial primary key,
author text not null
);

INSERT INTO accounts(username, password) VALUES ('administrator', 'administrator');
INSERT INTO accounts(username, password) VALUES ('biblioteka', 'biblioteka');
INSERT INTO accounts(username, password) VALUES ('jankowalski', 'jankowalski');

INSERT INTO people(id_account, firstname, secondname) VALUES (1, 'Administator', 'Biblioteki');
INSERT INTO people(id_account, firstname, secondname) VALUES (2, 'Pracownik', 'Biblioteki');
INSERT INTO people(id_account, firstname, secondname) VALUES (3, 'Jan', 'Kowalski');

INSERT INTO roles(id_account, role) VALUES (1, 'ROLE_ADMIN');
INSERT INTO roles(id_account, role) VALUES (1, 'ROLE_WORKER');
INSERT INTO roles(id_account, role) VALUES (1, 'ROLE_USER');
INSERT INTO roles(id_account, role) VALUES (2, 'ROLE_WORKER');
INSERT INTO roles(id_account, role) VALUES (2, 'ROLE_USER');
INSERT INTO roles(id_account, role) VALUES (3, 'ROLE_USER');

INSERT INTO authors(author) VALUES ('Bolesław Prus');
INSERT INTO authors(author) VALUES ('Henryk Sienkiewicz');
INSERT INTO authors(author) VALUES ('Adam Mickiewicz');
INSERT INTO authors(author) VALUES ('Andrzej Sapkowski');
INSERT INTO authors(author) VALUES ('Dmitry Glukhovsky');
INSERT INTO authors(author) VALUES ('Howard Phillips Lovecraft');
INSERT INTO authors(author) VALUES ('Johann Wolfgang von Goethe');

INSERT INTO images(path) VALUES ('faraon.jpg');
INSERT INTO images(path) VALUES ('lalka.jpg');
INSERT INTO images(path) VALUES ('kamizelka.jpg');
INSERT INTO images(path) VALUES ('w_pustyni_i_w_puszczy.jpg');
INSERT INTO images(path) VALUES ('quo_vadis.jpg');
INSERT INTO images(path) VALUES ('potop.jpg');
INSERT INTO images(path) VALUES ('krzyzacy.jpg');
INSERT INTO images(path) VALUES ('ogniem_i_mieczem.jpg');
INSERT INTO images(path) VALUES ('pan_tadeusz.jpg');
INSERT INTO images(path) VALUES ('konrad_wallenrod.jpg');
INSERT INTO images(path) VALUES ('sonety_krymskie.jpg');
INSERT INTO images(path) VALUES ('dziady_cz3.jpg');
INSERT INTO images(path) VALUES ('ostatnie_zyczenie.jpg');
INSERT INTO images(path) VALUES ('miecz_przeznaczenia.jpg');
INSERT INTO images(path) VALUES ('krew_elfow.jpg');
INSERT INTO images(path) VALUES ('czas_pogardy.jpg');
INSERT INTO images(path) VALUES ('chrzest_ognia.jpg');
INSERT INTO images(path) VALUES ('wieza_jaskolki.jpg');
INSERT INTO images(path) VALUES ('pani_jeziora.jpg');
INSERT INTO images(path) VALUES ('metro_2033.jpg');
INSERT INTO images(path) VALUES ('metro_2034.jpg');
INSERT INTO images(path) VALUES ('future.jpg');
INSERT INTO images(path) VALUES ('zew_cthulhu.jpg');
INSERT INTO images(path) VALUES ('cierpienia_mlodego_wertera.jpg');
INSERT INTO images(path) VALUES ('sezon_burz.jpg');

INSERT INTO books(title, id_author, id_image) VALUES ('Faraon', 1, 1);
INSERT INTO books(title, id_author, id_image) VALUES ('Lalka', 1, 2);
INSERT INTO books(title, id_author, id_image) VALUES ('Kamizelka', 1, 3);

INSERT INTO books(title, id_author, id_image) VALUES ('W pustyni i w puszczy', 2, 4);
INSERT INTO books(title, id_author, id_image) VALUES ('Quo vadis', 2, 5);
INSERT INTO books(title, id_author, id_image) VALUES ('Potop', 2, 6);
INSERT INTO books(title, id_author, id_image) VALUES ('Krzyżacy', 2, 7);
INSERT INTO books(title, id_author, id_image) VALUES ('Ogniem i mieczem', 2, 8);

INSERT INTO books(title, id_author, id_image) VALUES ('Pan Tadeusz', 3, 9);
INSERT INTO books(title, id_author, id_image) VALUES ('Konrad Wallenrod', 3, 10);
INSERT INTO books(title, id_author, id_image) VALUES ('Sonety krymskie', 3, 11);
INSERT INTO books(title, id_author, id_image) VALUES ('Dziady cz. 3', 3, 12);

INSERT INTO books(title, id_author, id_image) VALUES ('Ostatnie życzenie', 4, 13);
INSERT INTO books(title, id_author, id_image) VALUES ('Miecz przeznaczenia', 4, 14);
INSERT INTO books(title, id_author, id_image) VALUES ('Krew elfów', 4, 15);
INSERT INTO books(title, id_author, id_image) VALUES ('Czas pogardy', 4, 16);
INSERT INTO books(title, id_author, id_image) VALUES ('Chrzest ognia', 4, 17);
INSERT INTO books(title, id_author, id_image) VALUES ('Wieża Jaskółki', 4, 18);
INSERT INTO books(title, id_author, id_image) VALUES ('Pani Jeziora', 4, 19);
INSERT INTO books(title, id_author, id_image) VALUES ('Sezon Burz', 4, 25);

INSERT INTO books(title, id_author, id_image) VALUES ('Metro 2033', 5, 20);
INSERT INTO books(title, id_author, id_image) VALUES ('Metro 2034', 5, 21);
INSERT INTO books(title, id_author, id_image) VALUES ('FUTU.RE', 5, 22);

INSERT INTO books(title, id_author, id_image) VALUES ('Zew Cthulhu', 6, 23);

INSERT INTO books(title, id_author, id_image) VALUES ('Cierpienia młodego Wertera', 7, 24);

INSERT INTO copies(id_book) VALUES (1);
INSERT INTO copies(id_book) VALUES (1);
INSERT INTO copies(id_book) VALUES (1);
INSERT INTO copies(id_book) VALUES (1);
INSERT INTO copies(id_book) VALUES (2);
INSERT INTO copies(id_book) VALUES (2);
INSERT INTO copies(id_book) VALUES (2);
INSERT INTO copies(id_book) VALUES (3);
INSERT INTO copies(id_book) VALUES (4);
INSERT INTO copies(id_book) VALUES (5);
INSERT INTO copies(id_book) VALUES (6);
INSERT INTO copies(id_book) VALUES (6);
INSERT INTO copies(id_book) VALUES (6);
INSERT INTO copies(id_book) VALUES (7);
INSERT INTO copies(id_book) VALUES (8);
INSERT INTO copies(id_book) VALUES (9);
INSERT INTO copies(id_book) VALUES (9);
INSERT INTO copies(id_book) VALUES (10);
INSERT INTO copies(id_book) VALUES (10);
INSERT INTO copies(id_book) VALUES (11);
INSERT INTO copies(id_book) VALUES (11);
INSERT INTO copies(id_book) VALUES (12);
INSERT INTO copies(id_book) VALUES (12);
INSERT INTO copies(id_book) VALUES (13);
INSERT INTO copies(id_book) VALUES (14);
INSERT INTO copies(id_book) VALUES (14);
INSERT INTO copies(id_book) VALUES (14);
INSERT INTO copies(id_book) VALUES (14);
INSERT INTO copies(id_book) VALUES (15);
INSERT INTO copies(id_book) VALUES (15);
INSERT INTO copies(id_book) VALUES (16);
INSERT INTO copies(id_book) VALUES (16);
INSERT INTO copies(id_book) VALUES (16);
INSERT INTO copies(id_book) VALUES (17);
INSERT INTO copies(id_book) VALUES (18);
INSERT INTO copies(id_book) VALUES (19);
INSERT INTO copies(id_book) VALUES (20);
INSERT INTO copies(id_book) VALUES (21);
INSERT INTO copies(id_book) VALUES (22);
INSERT INTO copies(id_book) VALUES (23);
INSERT INTO copies(id_book) VALUES (24);

INSERT INTO loans(id_person, id_copy, date_loaned, returned) VALUES (3, 5, '2015-11-20 15:05:06', TRUE);
INSERT INTO loans(id_person, id_copy, date_loaned, returned) VALUES (3, 17, '2015-11-20 15:05:20', TRUE);
INSERT INTO loans(id_person, id_copy, date_loaned, returned) VALUES (3, 24, '2015-11-21 14:30:47', TRUE);
INSERT INTO loans(id_person, id_copy, date_loaned, returned) VALUES (3, 41, '2015-12-23 17:51:02', FALSE);
