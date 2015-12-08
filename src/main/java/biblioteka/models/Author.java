package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="authors")
public class Author {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String author;

	protected Author() {}
	public Author(String author) {
		this.author = author;
	}

	public long getId(){
		return this.id;
	}

	public String getAuthor(){
		return this.author;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setAuthor(String author){
		this.author = author;
	}

	@Override
	public String toString() {
		return String.format(
			"Author[id=%d, author='%s']",
			id, author);
		}
}
