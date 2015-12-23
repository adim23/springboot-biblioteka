package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import biblioteka.models.Image;

public interface ImagesRepository extends JpaRepository<Image, Long> {
}
