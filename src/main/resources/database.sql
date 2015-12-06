CREATE TABLE books(
    id serial primary key,
    title text not null,
    author text not null
);

INSERT INTO books(title, author) VALUES ('W pustyni i w puszczy', 'Bolesław Prus');
INSERT INTO books(title, author) VALUES ('Wiedźmin: Miecz przeznaczenia', 'Andrzej Sapkowski');
