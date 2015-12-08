package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Book;
import biblioteka.repositories.BooksRepository;

@Controller
public class BooksController {
	@Autowired
	private BooksRepository booksRepository;

	@RequestMapping(value = "/book/{id}", method = RequestMethod.GET)
	public String bookView(@PathVariable("id") long id, Model model) {
		Book book = booksRepository.findOne(id);
		model.addAttribute("id", book.getId());
		model.addAttribute("title", book.getTitle());
		model.addAttribute("author", book.getAuthor());
		return "book";
	}
}
