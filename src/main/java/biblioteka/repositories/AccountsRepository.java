package biblioteka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import biblioteka.models.Account;

public interface AccountsRepository extends JpaRepository<Account, Long> {
	Account findById(long id);
	Account findByUsername(String username);
}
