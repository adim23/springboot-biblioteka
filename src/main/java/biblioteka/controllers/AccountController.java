package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class AccountController {
	@RequestMapping(value = "/account", method = RequestMethod.GET)
	public String accountView() {
		return "login";
	}
}
