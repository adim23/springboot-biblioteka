package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Author;
import biblioteka.repositories.AuthorsRepository;
import biblioteka.models.Book;
import biblioteka.repositories.BooksRepository;

@Controller
public class AuthorsController {
	@Autowired
	private AuthorsRepository authorsRepository;

	@Autowired
	private BooksRepository booksRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/author/{id}", method = RequestMethod.GET)
	public String authorView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Author author = authorsRepository.findOne(id);
		model.addAttribute("id", author.getId());
		model.addAttribute("author", author.getAuthor());
		model.addAttribute("booksByAuthor", booksRepository.findByAuthor(author.getAuthor()));
		roleBasedModel.parseModel(request, model);
		return "author";
	}
}
