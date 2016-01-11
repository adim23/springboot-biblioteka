package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import biblioteka.models.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;

		@OneToMany(mappedBy="account", orphanRemoval=true)
		private List<Role> roles;

		protected Account(){}
		public Account(String username, String password){
			this.username = username;
			this.password = password;
		}

		public long getId(){
			return this.id;
		}

		@JsonIgnore
		public List<Role> getRoles(){
			return this.roles;
		}

		public void setRoles(List<Role> roles){
			this.roles = roles;
		}

		public String securityGetPassword(){
			return this.password;
		}

		public String getUsername(){
			return this.username;
		}

		public void setPassword(String password){
			this.password = password;
		}
}
