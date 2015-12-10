package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import biblioteka.models.Person;
import biblioteka.models.Account;

public interface PeopleRepository extends JpaRepository<Person, Long> {
	Person findById(long id);
	Person findByAccount(Account account);
	Person findByFirstname(String firstname);
	Person findBySecondname(String secondname);
}
