package biblioteka.controllers.rest;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Image;
import biblioteka.repositories.ImagesRepository;

@RestController
public class ImagesControllerRest {
	@Autowired
	protected ImagesRepository imagesRepository;

	@RequestMapping(value = "/api/images")
	public Iterable<Image> images(@RequestParam(value="path", defaultValue="") String path) {
		return imagesRepository.findByPathContainingIgnoreCase(path);
	}

	@RequestMapping(value = "/api/images", method = RequestMethod.POST)
	public Image imagesPOST(@RequestParam("name") String name, @RequestParam("file") MultipartFile file) {
    String filename = "images/" + name;
		if (name.length() == 0){
			return null;
		}
    if (!file.isEmpty()) {
      try {
        byte[] bytes = file.getBytes();
        File newFile = new File(filename);
        if (newFile.exists()){
          return null;
        }
        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(newFile));
        stream.write(bytes);
        stream.close();

        Image image = new Image(name);
        imagesRepository.save(image);
        imagesRepository.flush();
        return image;
      } catch (Exception e) {
        return null;
      }
    }
    else {
    	return null;
    }
	}

	@RequestMapping(value = "/api/images/{id}")
	public Image imagesId(@PathVariable("id") long id) {
		return imagesRepository.findOne(id);
	}
}
