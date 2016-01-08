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
import biblioteka.models.Copy;
import biblioteka.repositories.BooksRepository;
import biblioteka.repositories.AuthorsRepository;
import biblioteka.repositories.CopiesRepository;
import biblioteka.models.Image;
import biblioteka.repositories.ImagesRepository;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class BooksControllerRest {

	@Autowired
	protected CopiesRepository copiesRepository;

	@Autowired
	protected BooksRepository booksRepository;

	@Autowired
	protected AuthorsRepository authorsRepository;

	@Autowired
	protected ImagesRepository imagesRepository;

	@RequestMapping(value = "/api/books")
	public Iterable<Book> books(@RequestParam(value="title", defaultValue="") String title, @RequestParam(value="author", defaultValue="") String author) {
		return booksRepository.search(title, author);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Book booksPOST(@RequestBody Book book) {
		if (book.getAuthor() == null){
			return null;
		}
		booksRepository.save(book);
		booksRepository.flush();
		return book;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
	public Book booksPUT(@PathVariable("id") long id, @RequestBody Book book) {
		Book oldBook = booksRepository.findOne(id);
		if (book.getAuthor() != null){
			if (authorsRepository.findOne(book.getAuthor().getId()) != null){
				oldBook.setAuthor(book.getAuthor());
			}
		}
		if (book.getTitle() != null){
			oldBook.setTitle(book.getTitle());
		}
		if (book.getImage() != null){
			if (imagesRepository.findOne(book.getImage().getId()) != null){
				oldBook.setImage(book.getImage());
			}
		}
		else {
			oldBook.setImage(null);
		}
		booksRepository.save(oldBook);
		booksRepository.flush();

		return book;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public Book booksDELETE(@PathVariable("id") long id) {
		Book book = booksRepository.findOne(id);
		if (book != null){
			booksRepository.delete(id);
		}
		return book;
	}

	@RequestMapping(value = "/api/books/{id}")
	public Book booksId(@PathVariable("id") long id) {
		return booksRepository.findOne(id);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/books/{id}/copies", method = RequestMethod.GET)
	public Iterable<Copy> booksCopies(@PathVariable("id") long id, @RequestParam(value="available", required=false) Boolean available) {
		if (available == null)	return booksRepository.findOne(id).getCopies();
		if (available)	return copiesRepository.findByBookAndLoanIsNull(booksRepository.findOne(id));
		return copiesRepository.findByBookAndLoanNotNull(booksRepository.findOne(id));
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
