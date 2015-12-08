CREATE TABLE books(
		id serial primary key,
		title text not null,
		author text not null,
		description text not null
);

CREATE TABLE authors(
		id serial primary key,
		author text not null
);

INSERT INTO books(title, author) VALUES ('Faraon', 'Bolesław Prus');
INSERT INTO books(title, author) VALUES ('W pustyni i w puszczy', 'Bolesław Prus');
INSERT INTO books(title, author) VALUES ('Wiedźmin: Miecz przeznaczenia', 'Andrzej Sapkowski');
INSERT INTO books(title, author) VALUES ('Metro 2033', 'Dmitry Glukhovsky');
INSERT INTO books(title, author) VALUES ('Kroniki Jakuba Wędrowycza', 'Andrzej Pilipiuk');
INSERT INTO books(title, author) VALUES ('Zew Cthulhu', 'Howard Phillips Lovecraft');
INSERT INTO books(title, author) VALUES ('Pan Tadeusz', 'Adam Mickiewicz');
INSERT INTO books(title, author) VALUES ('Konrad Wallenrod', 'Adam Mickiewicz');
INSERT INTO books(title, author) VALUES ('Cierpienia młodego Wertera', 'Johann Wolfgang von Goethe');
INSERT INTO books(title, author) VALUES ('Lalka', 'Bolesław Prus');
INSERT INTO books(title, author) VALUES ('Kamizelka', 'Bolesław Prus');
