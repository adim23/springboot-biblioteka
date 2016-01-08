package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Book;
import biblioteka.models.Author;
import biblioteka.repositories.BooksRepository;
import biblioteka.repositories.AuthorsRepository;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class AuthorsControllerRest {
	@Autowired
	protected AuthorsRepository authorsRepository;

	@Autowired
	protected BooksRepository booksRepository;

	@RequestMapping(value = "/api/authors", method = RequestMethod.GET)
	public Iterable<Author> authors(@RequestParam(value="author", defaultValue="") String author) {
		return authorsRepository.findByAuthorContainingIgnoreCase(author);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/authors", method = RequestMethod.POST)
	public Author authorsPOST(@RequestBody Author author) {
		authorsRepository.save(author);
		authorsRepository.flush();
		return author;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/authors/{id}", method = RequestMethod.PUT)
	public Author authorsPUT(@PathVariable("id") long id, @RequestBody Author author) {
		Author oldAuthor = authorsRepository.findOne(id);
		if (author.getAuthor().length() != 0){
			oldAuthor.setAuthor(author.getAuthor());
		}
		authorsRepository.save(oldAuthor);
		authorsRepository.flush();

		return author;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/authors/{id}", method = RequestMethod.DELETE)
	public Author authorsDELETE(@PathVariable("id") long id) {
		Author author = authorsRepository.findOne(id);
		if (author != null){
			authorsRepository.delete(id);
		}
		return author;
	}

	@RequestMapping(value = "/api/authors/{id}", method = RequestMethod.GET)
	public Author authorsId(@PathVariable("id") long id) {
		return authorsRepository.findOne(id);
	}

	@RequestMapping(value = "/api/authors/{id}/books", method = RequestMethod.GET)
	public Iterable<Book> authorsBooks(@PathVariable("id") long id) {
		return authorsRepository.findOne(id).getBooks();
	}

	public Iterable<Author> authorsById(@RequestParam("id") long id) {
		return authorsRepository.findById(id);
	}

	public Iterable<Author> authorsByAuthor(@RequestParam("author") String author) {
		return authorsRepository.findByAuthor(author);
	}
}
