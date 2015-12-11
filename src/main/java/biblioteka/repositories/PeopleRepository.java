package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Person;
import biblioteka.models.Account;

public interface PeopleRepository extends JpaRepository<Person, Long> {
	@Query("SELECT p FROM Person p " +
	"WHERE LOWER(p.firstname) LIKE LOWER(CONCAT('%',:firstname, '%')) " +
	"AND LOWER(p.secondname) LIKE LOWER(CONCAT('%',:secondname, '%'))")
	Iterable<Person> search(@Param("firstname") String firstname, @Param("secondname") String secondname);
	Iterable<Person> findById(long id);
	Person findByAccount(Account account);
	Iterable<Person> findByFirstname(String firstname);
	Iterable<Person> findBySecondname(String secondname);
}
