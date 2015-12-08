package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Author;
import biblioteka.repositories.AuthorsRepository;

@Controller
public class AuthorsController {
	@Autowired
	private AuthorsRepository authorsRepository;

	@RequestMapping(value = "/author/{id}", method = RequestMethod.GET)
	public String bookView(@PathVariable("id") long id, Model model) {
		Author author = authorsRepository.findOne(id);
		model.addAttribute("id", author.getId());
		model.addAttribute("author", author.getAuthor());
		return "author";
	}
}
