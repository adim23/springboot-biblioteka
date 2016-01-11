package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;

@Controller
public class UsersController {
	@Autowired
	private AccountsRepository accountsRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public String personView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Account account = accountsRepository.findOne(id);
		model.addAttribute("account", account);
		roleBasedModel.parseModel(request, model);
		return "user";
	}
}
