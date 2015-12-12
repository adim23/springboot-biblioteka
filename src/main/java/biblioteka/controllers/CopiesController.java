package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Copy;
import biblioteka.repositories.CopiesRepository;
import biblioteka.models.Loan;
import biblioteka.repositories.LoansRepository;
import java.util.List;

@Controller
public class CopiesController {

	@Autowired
	private CopiesRepository copiesRepository;

	@Autowired
	private LoansRepository loansRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/copy/{id}", method = RequestMethod.GET)
	public String bookView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Copy copy = copiesRepository.findOne(id);
		model.addAttribute("id", id);
		model.addAttribute("book", copy.getBook());
		List<Loan> loans = copy.getLoans();
		model.addAttribute("timesLoaned", loans.size());
		roleBasedModel.parseModel(request, model);
		return "copy";
	}
}
