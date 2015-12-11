package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import biblioteka.models.Role;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;

		protected Account(){}
		public Account(String username, String password){
			this.username = username;
			this.password = password;
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

		public void setPassword(String password){
			this.password = password;
		}
}
