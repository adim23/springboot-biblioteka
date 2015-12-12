package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Loan;
import biblioteka.repositories.LoansRepository;

@RestController
public class LoansControllerRest {
	@Autowired
	protected LoansRepository loansRepository;

	@RequestMapping(value = "/api/loans")
	public Iterable<Loan> loans(@RequestParam(value="firstname", defaultValue="") String firstname, @RequestParam(value="secondname", defaultValue="") String secondname) {
		return loansRepository.search(firstname, secondname);
	}

	@RequestMapping(value = "/api/loans/{id}")
	public Loan loansId(@PathVariable("id") long id) {
		return loansRepository.findOne(id);
	}
}
