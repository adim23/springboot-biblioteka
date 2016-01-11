package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;
import biblioteka.models.Role;
import biblioteka.repositories.RolesRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.List;

@RestController
public class PeopleControllerRest {
	@Autowired
	protected PeopleRepository peopleRepository;

	@Autowired
	protected RolesRepository rolesRepository;

	@Autowired
	protected AccountsRepository accountsRepository;

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/people")
	public Iterable<Person> people(@RequestParam(value="firstname", defaultValue="") String firstname, @RequestParam(value="secondname", defaultValue="") String secondname) {
		return peopleRepository.search(firstname, secondname);
	}

	@PreAuthorize("hasRole('ROLE_WORKER')")
	@RequestMapping(value = "/api/people/{id}")
	public Person peopleId(@PathVariable("id") long id) {
		return peopleRepository.findOne(id);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@RequestMapping(value = "/api/people/{id}", method = RequestMethod.PUT)
	public Person peoplePUT(@PathVariable("id") long id, @RequestBody Person person) {
		Person oldPerson = peopleRepository.findOne(id);
		if (oldPerson == null)	return null;

		if (person.getFirstname().length() != 0){
			oldPerson.setFirstname(person.getFirstname());
		}
		if (person.getSecondname().length() != 0){
			oldPerson.setSecondname(person.getSecondname());
		}
		peopleRepository.save(oldPerson);
		peopleRepository.flush();

		return person;
	}

	public Iterable<Person> peopleById(@RequestParam("id") long id) {
		return peopleRepository.findById(id);
	}

	public Iterable<Person> peopleByFirstname(@RequestParam("firstname") String firstname) {
		return peopleRepository.findByFirstname(firstname);
	}

	public Iterable<Person> peopleBySecondname(@RequestParam("secondname") String secondname) {
		return peopleRepository.findBySecondname(secondname);
	}
}
