package biblioteka.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Author;

public interface AuthorsRepository extends CrudRepository<Author, Long> {
	Iterable<Author> findById(long id);
	Iterable<Author> findByAuthor(@Param("author") String author);
	Iterable<Author> findByAuthorContaining(@Param("author") String author);
}
