package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import biblioteka.models.Account;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.OneToMany;
import biblioteka.models.Loan;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="people")
public class Person {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@OneToOne
	@JoinColumn(name="id_account")
	private Account account;

	private String firstname;
	private String secondname;

	@OneToMany(mappedBy="person")
	private List<Loan> loans;

	protected Person(){}
	public Person(Account account, String firstname, String secondname){
		this.account = account;
		this.firstname = firstname;
		this.secondname = secondname;
	}

	@JsonIgnore
	public List<Loan> getLoans(){
		return this.loans;
	}

	public void setLoans(List<Loan> loans){
		this.loans = loans;
	}

	public long getId(){
		return this.id;
	}

	public Account getAccount(){
		return this.account;
	}

	public void setAccount(Account account){
		this.account = account;
	}

	public String getFirstname(){
		return this.firstname;
	}

	public String getSecondname(){
		return this.secondname;
	}

	public void setFirstname(String firstname){
		this.firstname = firstname;
	}

	public void setSecondname(String secondname){
		this.secondname = secondname;
	}
}
