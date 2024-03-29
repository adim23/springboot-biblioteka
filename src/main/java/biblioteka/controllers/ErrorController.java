package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletResponse;

@Controller
public class ErrorController {

	@Autowired
	private RoleBasedModel roleBasedModel;

	@RequestMapping(value = "/error", method = RequestMethod.GET)
	public String errorView(HttpServletRequest request, HttpServletResponse response, Model model) {
		model.addAttribute("error", response.getStatus());
		model.addAttribute("errorMessage", "Wystąpił błąd.");
		roleBasedModel.parseModel(request, model);
		return "error";
	}
}
