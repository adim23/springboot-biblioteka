package biblioteka.controllers;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.http.HttpServletRequest;
import biblioteka.controllers.util.RoleBasedModel;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileUploadController {

  @Autowired
	private RoleBasedModel roleBasedModel;

  @RequestMapping(value="/upload", method=RequestMethod.GET)
  public String provideUploadInfo() {
    return "admin";
  }

  @RequestMapping(value="/upload", method=RequestMethod.POST)
  public String handleFileUpload(HttpServletRequest request, Model model, @RequestParam("name") String name, @RequestParam("file") MultipartFile file){
    roleBasedModel.parseModel(request, model);
    String filename = "src/main/resources/static/img/" + name;
    if (!file.isEmpty()) {
      try {
        byte[] bytes = file.getBytes();
        BufferedOutputStream stream = new BufferedOutputStream(
          new FileOutputStream(
            new File(
              filename
            )
          )
        );
        stream.write(bytes);
        stream.close();
        model.addAttribute("message", "You successfully uploaded " + name + "!");
        return "admin";
      } catch (Exception e) {
        model.addAttribute("message", "You failed to upload " + name + " => " + e.getMessage());
        return "admin";
      }
    }
    else {
      model.addAttribute("message", "You failed to upload " + name + " because the file was empty.");
      return "admin";
    }
  }
}
