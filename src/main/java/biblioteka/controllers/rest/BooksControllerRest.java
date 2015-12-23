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

@RestController
public class BooksControllerRest {
	@Autowired
	protected BooksRepository booksRepository;

	@Autowired
	protected AuthorsRepository authorsRepository;

	@RequestMapping(value = "/api/books")
	public Iterable<Book> books(@RequestParam(value="title", defaultValue="") String title, @RequestParam(value="author", defaultValue="") String author) {
		return booksRepository.search(title, author);
	}

	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Book booksPOST(@RequestBody Book book) {
		booksRepository.save(book);
		booksRepository.flush();
		return book;
	}


	@RequestMapping(value = "/api/books/{id}")
	public Book booksId(@PathVariable("id") long id) {
		return booksRepository.findOne(id);
	}

	public Iterable<Book> booksById(@RequestParam("id") long id) {
		return booksRepository.findById(id);
	}

	public Iterable<Book> booksByAuthor(@RequestParam("author") String author) {
		return booksRepository.findByAuthor(author);
	}

	public Iterable<Book> booksByTitle(@RequestParam("title") String title) {
		return booksRepository.findByTitle(title);
	}
}
