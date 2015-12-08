package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;
import biblioteka.models.Role;

@Controller
public class RegisterController {
	@Autowired
	private AccountsRepository accountsRepository;

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registerView() {
		return "register";
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registerPost(@RequestParam(value="username", defaultValue="") String username, @RequestParam(value="password", defaultValue="") String password, @RequestParam(value="firstname", defaultValue="") String firstname, @RequestParam(value="lastname", defaultValue="") String lastname, Model model) {
		String alphaNumeric = "[a-zA-Z0-9]+";
		if (!username.matches(alphaNumeric)){
			model.addAttribute("message", "Nieprawidłowy login.");
			return "register";
		}
		if (password.length() == 0){
			model.addAttribute("message", "Nieprawidłowe hasło.");
			return "register";
		}
		Account account = accountsRepository.findByUsername(username);
		if (account == null){
			accountsRepository.save(new Account(username, password, Role.USER, firstname, lastname));
			accountsRepository.flush();
			model.addAttribute("message", "Rejestracja zakończona pomyślnie.");
			return "login";
		}
		model.addAttribute("message", "Użytkownik już istnieje.");
		return "register";
	}
}
