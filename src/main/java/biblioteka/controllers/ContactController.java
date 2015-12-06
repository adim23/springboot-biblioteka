package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactController {
	@RequestMapping(value = "/contact", method = RequestMethod.GET)
	public String contactView() {
		return "contact";
	}
}
