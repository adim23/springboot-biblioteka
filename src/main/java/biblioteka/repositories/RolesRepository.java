package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Role;
import biblioteka.models.Account;

public interface RolesRepository extends JpaRepository<Role, Long> {
	Iterable<Role> findById(long id);
	Iterable<Role> findByAccount(Account account);
}
