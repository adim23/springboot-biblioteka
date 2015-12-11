package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import biblioteka.models.Copy;
import biblioteka.models.Person;

@Entity
@Table(name="loans")
public class Loan {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	@ManyToOne
	@JoinColumn(name="id_person")
	private Person person;

	@ManyToOne
	@JoinColumn(name="id_copy")
	private Copy copy;

	private boolean returned;

	protected Loan() {}
	public Loan(Person person, Copy copy, boolean returned) {
		this.person = person;
		this.copy = copy;
		this.returned = returned;
	}

	public long getId(){
		return this.id;
	}

	public Person getPerson(){
		return this.person;
	}

	public Copy getCopy(){
		return this.copy;
	}

	public boolean getReturned(){
		return this.returned;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setCopy(Copy copy){
		this.copy = copy;
	}

	public void setPerson(Person person){
		this.person = person;
	}

	public void setReturned(boolean returned){
		this.returned = returned;
	}
}
