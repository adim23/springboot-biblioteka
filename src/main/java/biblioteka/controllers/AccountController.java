package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;

@Controller
public class AccountController {
	@RequestMapping(value = "/account", method = RequestMethod.GET)
	public String accountView(HttpServletRequest request, Model model) {
		model.addAttribute("loggedAs", request.getRemoteUser());
		return "account";
	}
}
