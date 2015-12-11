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
public class MainController {

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String indexView(HttpServletRequest request, Model model) {
		roleBasedModel.parseModel(request, model);
		return "index";
	}
}
