package biblioteka.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Book;

public interface BooksRepository extends CrudRepository<Book, Long> {
	Iterable<Book> findById(long id);

	@Query("SELECT b FROM Book b WHERE LOWER(b.title) LIKE LOWER(CONCAT('%',:title,'%')) and LOWER(b.author) LIKE LOWER(CONCAT('%',:author,'%'))")
	Iterable<Book> search(@Param("title") String title, @Param("author") String author);

	@Query("SELECT b FROM Book b WHERE LOWER(b.title) LIKE LOWER(CONCAT('%',:title,'%'))")
	Iterable<Book> findByTitleContaining(@Param("title") String title);

	@Query("SELECT b FROM Book b WHERE LOWER(b.author) LIKE LOWER(CONCAT('%',:author,'%'))")
	Iterable<Book> findByAuthorContaining(@Param("author") String author);

	Iterable<Book> findByTitle(@Param("title") String title);
	Iterable<Book> findByAuthor(@Param("author") String author);
}
