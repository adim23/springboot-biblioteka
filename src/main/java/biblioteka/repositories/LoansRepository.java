package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Loan;
import biblioteka.models.Copy;
import biblioteka.models.Person;
import biblioteka.models.Book;
import biblioteka.models.Author;

public interface LoansRepository extends JpaRepository<Loan, Long> {
	@Query("SELECT l FROM Loan l, Person p " +
	"WHERE LOWER(p.firstname) LIKE LOWER(CONCAT('%',:firstname, '%')) " +
	"AND LOWER(p.secondname) LIKE LOWER(CONCAT('%',:secondname, '%')) " +
	"AND l.person = p.id")
	Iterable<Loan> search(@Param("firstname") String firstname, @Param("secondname") String secondname);

	@Query("SELECT l FROM Loan l, Person p " +
	"WHERE LOWER(p.firstname) LIKE LOWER(CONCAT('%',:firstname, '%')) " +
	"AND l.returned IS FALSE " +
	"AND LOWER(p.secondname) LIKE LOWER(CONCAT('%',:secondname, '%')) " +
	"AND l.person = p.id")
	Iterable<Loan> searchLoaned(@Param("firstname") String firstname, @Param("secondname") String secondname);

	@Query("SELECT l FROM Loan l, Person p " +
	"WHERE LOWER(p.firstname) LIKE LOWER(CONCAT('%',:firstname, '%')) " +
	"AND l.returned IS TRUE " +
	"AND LOWER(p.secondname) LIKE LOWER(CONCAT('%',:secondname, '%')) " +
	"AND l.person = p.id")
	Iterable<Loan> searchReturned(@Param("firstname") String firstname, @Param("secondname") String secondname);

	Iterable<Loan> findById(long id);
	Iterable<Loan> findByCopy(@Param("copy") Copy copy);
	Iterable<Loan> findByPerson(@Param("person") Person person);
}
