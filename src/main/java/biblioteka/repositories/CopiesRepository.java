package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Copy;
import biblioteka.models.Book;
import java.util.List;

public interface CopiesRepository extends JpaRepository<Copy, Long> {
	Iterable<Copy> findById(long id);
	List<Copy> findByBook(@Param("book") Book book);
}
