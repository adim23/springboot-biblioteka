package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import biblioteka.models.Role;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

		protected Account(){}
		public Account(String username, String password, Role role){
			this.username = username;
			this.password = password;
			this.role = role;
		}

		public long getId(){
			return this.id;
		}

		public String securityGetPassword(){
			return this.password;
		}

		public String getUsername(){
			return this.username;
		}

		public Role getRole(){
			return this.role;
		}

		public void setPassword(String password){
			this.password = password;
		}

		public void setRole(Role role){
			this.role = role;
		}
}
