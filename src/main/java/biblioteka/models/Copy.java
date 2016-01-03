package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import java.util.List;
import biblioteka.models.Book;
import biblioteka.models.Person;
import biblioteka.models.Loan;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="copies")
public class Copy {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	@ManyToOne
	@JoinColumn(name="id_book")
	private Book book;

	@OneToMany(mappedBy="copy", orphanRemoval=true)
	private List<Loan> loans;

	private boolean loaned;

	@ManyToOne
	@JoinColumn(name="id_person")
	private Person person;

	protected Copy() {}
	public Copy(Book book, boolean loaned) {
		this.book = book;
		this.loaned = loaned;
	}

	public long getId(){
		return this.id;
	}

	public Book getBook(){
		return this.book;
	}

	public boolean getLoaned(){
		return this.loaned;
	}

	public Person getPerson(){
		return this.person;
	}

	@JsonIgnore
	public List<Loan> getLoans(){
		return this.loans;
	}

	public void setLoans(List<Loan> loans){
		this.loans = loans;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setLoaned(boolean loaned){
		this.loaned = loaned;
	}

	public void setPerson(Person person){
		this.person = person;
	}

	public void setBook(Book book){
		this.book = book;
	}
}
