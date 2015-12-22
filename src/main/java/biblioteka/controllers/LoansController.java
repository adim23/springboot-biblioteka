package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Loan;
import biblioteka.repositories.LoansRepository;
import java.util.List;

@Controller
public class LoansController {
	@Autowired
	private LoansRepository loansRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/loan/{id}", method = RequestMethod.GET)
	public String loanView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Loan loan = loansRepository.findOne(id);
		model.addAttribute("loan", loan);
		roleBasedModel.parseModel(request, model);
		return "loan";
	}
}
