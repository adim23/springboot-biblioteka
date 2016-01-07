package biblioteka.models;

import java.util.Calendar;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
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

	@Column(name="date_loaned")
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar loaned;

	private boolean returned;

	protected Loan() {}
	public Loan(Person person, Copy copy, Calendar loaned, boolean returned) {
		this.person = person;
		this.copy = copy;
		this.loaned = loaned;
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

	public Calendar getLoaned(){
		return this.loaned;
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

	public void setLoaned(Calendar loaned){
		this.loaned = loaned;
	}

	public void setReturned(boolean returned){
		this.returned = returned;
	}
}
