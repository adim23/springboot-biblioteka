package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Author;
import biblioteka.models.Book;

public interface AuthorsRepository extends JpaRepository<Author, Long> {
	Iterable<Author> findById(long id);
	Iterable<Author> findByAuthor(@Param("author") String author);
	Iterable<Author> findByAuthorContaining(@Param("author") String author);
	Iterable<Author> findByAuthorContainingIgnoreCase(@Param("author") String author);
}
