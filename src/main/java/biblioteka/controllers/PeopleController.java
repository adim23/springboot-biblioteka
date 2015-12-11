package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;

@Controller
public class PeopleController {
	@Autowired
	private PeopleRepository peopleRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/person/{id}", method = RequestMethod.GET)
	public String personView(@PathVariable("id") long id, Model model, HttpServletRequest request) {
		Person person = peopleRepository.findOne(id);
		model.addAttribute("id", person.getId());
		model.addAttribute("firstname", person.getFirstname());
		model.addAttribute("secondname", person.getSecondname());
		roleBasedModel.parseModel(request, model);
		return "person";
	}
}
