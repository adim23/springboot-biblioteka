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
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private long id;

		@Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "role", nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

		public long getId(){
			return this.id;
		}

		public String getPasswordHash(){
			return this.passwordHash;
		}

		public String getUsername(){
			return this.username;
		}

		public Role getRole(){
			return this.role;
		}

		public void setPasswordHash(String passwordHash){
			this.passwordHash = passwordHash;
		}

		public void setRole(Role role){
			this.role = role;
		}
}
