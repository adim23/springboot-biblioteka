package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Book;
import biblioteka.models.Author;

public interface BooksRepository extends JpaRepository<Book, Long> {
	Iterable<Book> findById(long id);

	@Query("SELECT b FROM Book b, Author a " +
	"WHERE LOWER(b.title) LIKE LOWER(CONCAT('%',:title, '%')) " +
	"AND LOWER(a.author) LIKE LOWER(CONCAT('%',:author, '%')) " +
	"AND b.author = a.id")
	Iterable<Book> search(@Param("title") String title, @Param("author") String author);

	Iterable<Book> findByTitleContaining(@Param("title") String title);
	Iterable<Book> findByAuthorContaining(@Param("author") String author);

	Iterable<Book> findByTitle(@Param("title") String title);

	@Query("SELECT b FROM Book b, Author a " +
	"WHERE a.author LIKE CONCAT('%',:author, '%') " +
	"AND b.author = a.id")
	Iterable<Book> findByAuthor(@Param("author") String author);

	@Query("SELECT b FROM Book b, Author a " +
	"WHERE LOWER(a.author) LIKE LOWER(CONCAT('%',:author, '%')) " +
	"AND b.author = a.id")
	Iterable<Book> findByAuthorIgnoreCase(@Param("author") String author);
}
