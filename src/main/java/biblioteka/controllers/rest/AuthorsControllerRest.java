package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Author;
import biblioteka.repositories.AuthorsRepository;

@RestController
public class AuthorsControllerRest {
	@Autowired
	protected AuthorsRepository authorsRepository;

	@RequestMapping(value = "/api/authors")
	public Iterable<Author> authors() {
		return authorsRepository.findAll();
	}

	@RequestMapping(value = "/api/authors/{id}")
	public Author authorsId(@PathVariable("id") long id) {
		return authorsRepository.findOne(id);
	}

	public Iterable<Author> authorsById(@RequestParam("id") long id) {
		return authorsRepository.findById(id);
	}

	public Iterable<Author> authorsByAuthor(@RequestParam("author") String author) {
		return authorsRepository.findByAuthor(author);
	}
}
