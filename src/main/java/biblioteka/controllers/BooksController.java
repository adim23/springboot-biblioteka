package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Book;
import biblioteka.repositories.BooksRepository;
import biblioteka.models.Copy;
import biblioteka.repositories.CopiesRepository;
import java.util.List;

@Controller
public class BooksController {
	@Autowired
	private BooksRepository booksRepository;

	@Autowired
	private CopiesRepository copiesRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/book/{id}", method = RequestMethod.GET)
	public String bookView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Book book = booksRepository.findOne(id);
		model.addAttribute("available",book.getCopiesAvailable());
		model.addAttribute("book", book);
		roleBasedModel.parseModel(request, model);
		return "book";
	}
}
