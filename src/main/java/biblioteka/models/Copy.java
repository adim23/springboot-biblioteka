package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import java.util.List;
import biblioteka.models.Book;
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

	@OneToMany(mappedBy="copy")
	private List<Loan> loans;

	protected Copy() {}
	public Copy(Book book) {
		this.book = book;
	}

	public long getId(){
		return this.id;
	}

	public Book getBook(){
		return this.book;
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

	public void setBook(Book book){
		this.book = book;
	}
}
