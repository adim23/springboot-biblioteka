package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class LoginController {

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginView(HttpServletRequest request, Model model) {
		roleBasedModel.parseModel(request, model);
		return "login";
	}
}
