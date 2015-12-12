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
import biblioteka.repositories.RolesRepository;
import biblioteka.models.RoleEnum;

@Controller
public class ChangePasswordController {
	@Autowired
	private AccountsRepository accountsRepository;

	@Autowired
	private RolesRepository rolesRepository;

	@Autowired
	private PeopleRepository peopleRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/changepassword", method = RequestMethod.POST)
	public String registerPost(@RequestParam(value="oldpassword", defaultValue="") String oldpassword, @RequestParam(value="newpassword", defaultValue="") String newpassword, Model model, HttpServletRequest request) {
		roleBasedModel.parseModel(request, model);
		String username = request.getRemoteUser();
		if (username == null){
			model.addAttribute("message", "Czarna dziura?");
			return "account";
		}
		Account account = accountsRepository.findByUsername(username);
		if (account == null){
			model.addAttribute("message", "Czarna dziura?");
			return "account";
		}
		System.out.println("Stare hasło: " + oldpassword + "\nNowe hasło: " + account.securityGetPassword());
		if (oldpassword.equals(account.securityGetPassword())){
			if (newpassword.length() == 0){
				model.addAttribute("message", "Nieprawidłowe nowe hasło.");
				return "account";
			}
			account.setPassword(newpassword);
			accountsRepository.flush();
			model.addAttribute("message", "Zmiana hasła zakończona powodzeniem.");
			return "account";
		}
		model.addAttribute("message", "Podane hasło nie jest prawidłowe.");
		return "account";
	}
}
