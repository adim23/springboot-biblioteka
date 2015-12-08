package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;
import javax.servlet.http.HttpServletRequest;

@Controller
public class AccountController {

	@Autowired
	private AccountsRepository accountRepository;

	@RequestMapping(value = "/account", method = RequestMethod.GET)
	public String accountView(HttpServletRequest request, Model model) {
		Account account = accountRepository.findByUsername(request.getRemoteUser());
		model.addAttribute("account", account);
		return "account";
	}
}
