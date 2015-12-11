package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import biblioteka.models.Account;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import biblioteka.models.RoleEnum;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;

@Entity
@Table(name="roles")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@ManyToOne
	@JoinColumn(name="id_account")
	private Account account;

	@Enumerated(EnumType.STRING)
	private RoleEnum role;

	protected Role(){}
	public Role(Account account, RoleEnum role){
		this.account = account;
		this.role = role;
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

	public RoleEnum getRole(){
		return this.role;
	}

	public void setRole(RoleEnum role){
		this.role = role;
	}
}
