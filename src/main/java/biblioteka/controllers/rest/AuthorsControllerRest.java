package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Book;
import biblioteka.models.Author;
import biblioteka.repositories.BooksRepository;
import biblioteka.repositories.AuthorsRepository;

@RestController
public class AuthorsControllerRest {
	@Autowired
	protected AuthorsRepository authorsRepository;

	@Autowired
	protected BooksRepository booksRepository;

	@RequestMapping(value = "/api/authors")
	public Iterable<Author> authors(@RequestParam(value="author", defaultValue="") String author) {
		return authorsRepository.findByAuthorContainingIgnoreCase(author);
	}

	@RequestMapping(value = "/api/authors/{id}")
	public Author authorsId(@PathVariable("id") long id) {
		return authorsRepository.findOne(id);
	}

	@RequestMapping(value = "/api/authors/{id}/books")
	public Iterable<Book> authorsBooks(@PathVariable("id") long id) {
		return booksRepository.findByAuthor(authorsRepository.findOne(id).getAuthor());
	}

	public Iterable<Author> authorsById(@RequestParam("id") long id) {
		return authorsRepository.findById(id);
	}

	public Iterable<Author> authorsByAuthor(@RequestParam("author") String author) {
		return authorsRepository.findByAuthor(author);
	}
}
