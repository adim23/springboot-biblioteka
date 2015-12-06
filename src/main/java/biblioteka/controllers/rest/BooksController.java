package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Book;
import biblioteka.repositories.BooksRepository;

@RestController
@RequestMapping(value = "/api/books")
public class BooksController {
	@Autowired
	protected BooksRepository booksRepository;

	@RequestMapping
	public Iterable<Book> books() {
		return booksRepository.findAll();
	}
}
