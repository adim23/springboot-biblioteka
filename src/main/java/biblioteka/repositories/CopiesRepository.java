package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Copy;
import biblioteka.models.Book;
import java.util.List;

public interface CopiesRepository extends JpaRepository<Copy, Long> {

	@Query("SELECT c FROM Copy c " +
	"WHERE LOWER(c.book.title) LIKE LOWER(CONCAT('%',:title, '%')) " +
	"AND LOWER(c.book.author.author) LIKE LOWER(CONCAT('%',:author, '%')) " +
	"AND c.book.author.author.id = c.book.author.id")
	Iterable<Copy> search(@Param("title") String title, @Param("author") String author);

	Iterable<Copy> findById(long id);

	@Query("SELECT c FROM Copy c " +
	"WHERE LOWER(c.book.title) LIKE LOWER(CONCAT('%',:title, '%')) " +
	"AND c.loan IS NULL " +
	"AND LOWER(c.book.author.author) LIKE LOWER(CONCAT('%',:author, '%')) " +
	"AND c.book.author.author.id = c.book.author.id")
	Iterable<Copy> searchAvailable(@Param("title") String title, @Param("author") String author);

	@Query("SELECT c FROM Copy c " +
	"WHERE LOWER(c.book.title) LIKE LOWER(CONCAT('%',:title, '%')) " +
	"AND c.loan IS NOT NULL " +
	"AND LOWER(c.book.author.author) LIKE LOWER(CONCAT('%',:author, '%')) " +
	"AND c.book.author.author.id = c.book.author.id")
	Iterable<Copy> searchNotAvailable(@Param("title") String title, @Param("author") String author);

	List<Copy> findByBookAndLoanNotNull(@Param("book") Book book);

	List<Copy> findByBookAndLoanIsNull(@Param("book") Book book);

	List<Copy> findByBook(@Param("book") Book book);
}
