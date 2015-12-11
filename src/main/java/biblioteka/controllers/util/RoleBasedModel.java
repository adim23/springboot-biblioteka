package biblioteka.controllers.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import javax.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;

@Component
public class RoleBasedModel {
	@Autowired
	private AccountsRepository accountRepository;

	@Autowired
	private PeopleRepository peopleRepository;

	public void parseModel(HttpServletRequest request, Model model){
		addUsername(request, model);
		addAdminTools(request, model);
		addWorkerTools(request, model);
		addUserTools(request, model);
	}
	public void addUsername(HttpServletRequest request, Model model){
		String username = request.getRemoteUser();
		if (username == null)	return;
		Account account = accountRepository.findByUsername(username);
		if (account == null) return;
		Person person = peopleRepository.findByAccount(account);
		model.addAttribute("person", person);
	}
	public void addAdminTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("ADMIN")){
			model.addAttribute("adminMode", 1);
		}
	}
	public void addWorkerTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("WORKER")){
			model.addAttribute("workerMode", 1);
		}
	}
	public static void addUserTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("User")){
			model.addAttribute("userMode", 1);
		}
	}
}
