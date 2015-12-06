package biblioteka.controllers;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String indexView() {
    return "index";
  }
}
