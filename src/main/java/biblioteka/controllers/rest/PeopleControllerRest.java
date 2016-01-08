package biblioteka.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import biblioteka.models.Person;
import biblioteka.repositories.PeopleRepository;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class PeopleControllerRest {
	@Autowired
	protected PeopleRepository peopleRepository;

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
