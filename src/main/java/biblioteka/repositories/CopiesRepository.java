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
	List<Copy> findByBook(@Param("book") Book book);
}
