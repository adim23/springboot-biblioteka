package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import biblioteka.models.Loan;
import biblioteka.repositories.LoansRepository;
import biblioteka.models.Copy;
import biblioteka.repositories.CopiesRepository;
import java.util.Calendar;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class LoansControllerRest {
	@Autowired
	protected LoansRepository loansRepository;
	@Autowired
	protected CopiesRepository copiesRepository;

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/loans")
	public Iterable<Loan> loans(@RequestParam(value="firstname", defaultValue="") String firstname, @RequestParam(value="secondname", defaultValue="") String secondname, @RequestParam(value="loaned", required=false) Boolean loaned) {
		if (loaned == null)	return loansRepository.search(firstname, secondname);
		if (loaned)	return loansRepository.searchLoaned(firstname, secondname);
		return loansRepository.searchReturned(firstname, secondname);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/loans", method = RequestMethod.POST)
	public Loan loansPOST(@RequestBody Loan loan) {
		Copy copy = copiesRepository.findOne(loan.getCopy().getId());
		if (copy == null || copy.getLoan() != null){
			return null;
		}

		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.MILLISECOND, 0);
		loan.setReturned(false);
		loan.setLoaned(calendar);

		loansRepository.save(loan);
		loansRepository.flush();

		copy.setLoan(loan);
		copiesRepository.save(copy);
		copiesRepository.flush();

		return loan;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/loans/{id}", method = RequestMethod.PUT)
	public Loan loansPUT(@PathVariable("id") long id, @RequestBody Loan loan) {
		Loan oldLoan = loansRepository.findOne(id);
		if ((Boolean) loan.getReturned() != null){
			oldLoan.setReturned(loan.getReturned());
		}
		loansRepository.save(oldLoan);
		loansRepository.flush();

		Copy copy = copiesRepository.findOne(oldLoan.getCopy().getId());
		copy.setLoan(null);
		copiesRepository.save(copy);
		copiesRepository.flush();

		return loan;
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/loans/{id}")
	public Loan loansId(@PathVariable("id") long id) {
		return loansRepository.findOne(id);
	}
}
