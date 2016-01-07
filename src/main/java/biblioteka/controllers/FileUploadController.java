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
import biblioteka.models.Image;
import biblioteka.repositories.ImagesRepository;

@Controller
public class FileUploadController {

  @Autowired
	protected ImagesRepository imagesRepository;

  @Autowired
	private RoleBasedModel roleBasedModel;

  @RequestMapping(value="/upload", method=RequestMethod.GET)
  public String provideUploadInfo() {
    return "admin";
  }

  @RequestMapping(value="/upload", method=RequestMethod.POST)
  public String handleFileUpload(HttpServletRequest request, Model model, @RequestParam("name") String name, @RequestParam("file") MultipartFile file){
    roleBasedModel.parseModel(request, model);
    String filename = "images/" + name;
    if (!file.isEmpty()) {
      try {
        byte[] bytes = file.getBytes();
        File newFile = new File(filename);
        if (newFile.exists()){
          model.addAttribute("message", "Plik o nazwie " + name + " już istnieje.");
          return "admin";
        }
        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(newFile));
        stream.write(bytes);
        stream.close();

        Image image = new Image(name);
        imagesRepository.save(image);
        imagesRepository.flush();
        model.addAttribute("message", "Dodałeś plik " + name + "!");
        return "admin";
      } catch (Exception e) {
        model.addAttribute("message", "Nie udało ci się dodać pliku " + name + " => " + e.getMessage());
        return "admin";
      }
    }
    else {
      model.addAttribute("message", "Nie udało ci się dodać pliku " + name + " ponieważ plik był pusty.");
      return "admin";
    }
  }
}
