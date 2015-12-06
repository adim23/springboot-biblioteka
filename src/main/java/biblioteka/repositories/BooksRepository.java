package biblioteka.repositories;

import org.springframework.data.repository.CrudRepository;
import biblioteka.models.Book;

public interface BooksRepository extends CrudRepository<Book, Long> {
	Iterable<Book> findByTitle(String title);
	Iterable<Book> findByAuthor(String author);
}
