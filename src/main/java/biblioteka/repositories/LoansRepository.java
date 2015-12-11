package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Loan;
import biblioteka.models.Copy;
import biblioteka.models.Person;

public interface LoansRepository extends JpaRepository<Loan, Long> {
	Iterable<Loan> findById(long id);
	Iterable<Loan> findByCopy(@Param("copy") Copy copy);
	Iterable<Loan> findByPerson(@Param("person") Person person);
}
