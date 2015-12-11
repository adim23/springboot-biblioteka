package biblioteka.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class ManageController {

	@Autowired
	private PeopleRepository peopleRepository;

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/manage", method = RequestMethod.GET)
	public String manageView(HttpServletRequest request, Model model) {
		roleBasedModel.parseModel(request, model);
		return "manage";
	}
}
