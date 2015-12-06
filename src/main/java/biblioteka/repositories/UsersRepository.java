package biblioteka.repositories;

import org.springframework.data.repository.CrudRepository;
import biblioteka.models.User;

public interface UsersRepository extends CrudRepository<User, Long> {
	Iterable<User> findById(long id);
	Iterable<User> findByUsername(String username);
}
