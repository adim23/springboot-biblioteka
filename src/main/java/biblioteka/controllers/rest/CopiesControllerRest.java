package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Copy;
import biblioteka.repositories.CopiesRepository;
import biblioteka.repositories.BooksRepository;

@RestController
public class CopiesControllerRest {
	@Autowired
	protected CopiesRepository copiesRepository;

	@Autowired
	protected BooksRepository booksRepository;

	@RequestMapping(value = "/api/copies", method = RequestMethod.GET)
	public Iterable<Copy> copies(@RequestParam(value="title", defaultValue="") String title, @RequestParam(value="author", defaultValue="") String author, @RequestParam(value="available", required=false) Boolean available) {
		if (available == null)	return copiesRepository.search(title, author);
		if (available)	return copiesRepository.searchAvailable(title, author);
		return copiesRepository.searchNotAvailable(title, author);
	}

	@RequestMapping(value = "/api/copies", method = RequestMethod.POST)
	public Copy copiesPOST(@RequestBody Copy copy) {
		copiesRepository.save(copy);
		copiesRepository.flush();
		return copy;
	}

	@RequestMapping(value = "/api/copies/{id}", method = RequestMethod.DELETE)
	public Copy copiesDELETE(@PathVariable("id") long id) {
		Copy copy = copiesRepository.findOne(id);
		if (copy != null){
			copiesRepository.delete(id);
		}
		return copy;
	}

	@RequestMapping(value = "/api/copies/{id}", method = RequestMethod.GET)
	public Copy copiesId(@PathVariable("id") long id) {
		return copiesRepository.findOne(id);
	}
}
