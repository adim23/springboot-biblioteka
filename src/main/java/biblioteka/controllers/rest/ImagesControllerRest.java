package biblioteka.controllers.rest;

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

	@RequestMapping(value = "/api/images/{id}")
	public Image imagesId(@PathVariable("id") long id) {
		return imagesRepository.findOne(id);
	}
}
