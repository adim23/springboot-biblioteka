CREATE TABLE books(
		id serial primary key,
		title text not null,
		author text not null,
		description text not null
);

CREATE TABLE authors(
		id serial primary key,
		firstname text not null,
		surname text not null
);

INSERT INTO books(title, author) VALUES ('W pustyni i w puszczy', 'Bolesław Prus');
INSERT INTO books(title, author) VALUES ('Wiedźmin: Miecz przeznaczenia', 'Andrzej Sapkowski');
INSERT INTO books(title, author) VALUES ('Metro 2033', 'Dmitry Glukhovsky');
INSERT INTO books(title, author) VALUES ('Kroniki Jakuba Wędrowycza', 'Andrzej Pilipiuk');
