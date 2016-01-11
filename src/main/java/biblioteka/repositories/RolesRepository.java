package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import biblioteka.models.Role;
import biblioteka.models.Account;
import java.util.List;

public interface RolesRepository extends JpaRepository<Role, Long> {
	List<Role> findById(long id);
	List<Role> findByAccount(Account account);
}
