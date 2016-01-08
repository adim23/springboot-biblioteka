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
import biblioteka.models.Book;
import biblioteka.repositories.BooksRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.List;

@RestController
public class ImagesControllerRest {
	@Autowired
	protected ImagesRepository imagesRepository;

	@Autowired
	protected BooksRepository booksRepository;

	@RequestMapping(value = "/api/images")
	public Iterable<Image> images(@RequestParam(value="path", defaultValue="") String path) {
		return imagesRepository.findByPathContainingIgnoreCase(path);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
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

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/images/{id}", method = RequestMethod.DELETE)
	public Image imagesDELETE(@PathVariable("id") long id) {
		Image image = imagesRepository.findOne(id);
		if (image != null){
			String filename = "images/" + image.getPath();
			List<Book> books = booksRepository.findByImage(image);
			books.forEach((book) -> book.setImage(null));
			booksRepository.save(books);
			booksRepository.flush();
			imagesRepository.delete(id);
			File file = new File(filename);
			file.delete();
		}
		return image;
	}

	@RequestMapping(value = "/api/images/{id}")
	public Image imagesId(@PathVariable("id") long id) {
		return imagesRepository.findOne(id);
	}
}
