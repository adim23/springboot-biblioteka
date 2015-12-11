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
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;
import biblioteka.models.Role;

@Controller
public class RegisterController {
	@Autowired
	private AccountsRepository accountsRepository;

	@Autowired
	private PeopleRepository peopleRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registerPost(@RequestParam(value="username", defaultValue="") String username, @RequestParam(value="password", defaultValue="") String password, @RequestParam(value="firstname", defaultValue="") String firstname, @RequestParam(value="secondname", defaultValue="") String secondname, Model model, HttpServletRequest request) {
		String alphaNumeric = "[a-zA-Z0-9]+";
		if (!username.matches(alphaNumeric)){
			model.addAttribute("message", "Nieprawidłowy login.");
			return "login";
		}
		if (password.length() == 0){
			model.addAttribute("message", "Nieprawidłowe hasło.");
			return "login";
		}
		if (firstname.length() == 0 || secondname.length() == 0){
			model.addAttribute("message", "Nieprawidłowe imię lub nazwisko.");
			return "login";
		}
		Account account = accountsRepository.findByUsername(username);
		if (account == null){
			account = new Account(username, password, Role.ROLE_USER);
			accountsRepository.save(account);
			accountsRepository.flush();
			peopleRepository.save(new Person(account, firstname, secondname));
			peopleRepository.flush();
			model.addAttribute("message", "Rejestracja zakończona pomyślnie.");
			return "login";
		}
		model.addAttribute("message", "Użytkownik już istnieje.");
		roleBasedModel.parseModel(request, model);
		return "login";
	}
}
