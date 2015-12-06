package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="books")
public class Book {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String title;
	private String author;

	protected Book() {}
	public Book(String title, String author) {
		this.title = title;
		this.author = author;
	}

	public long getId(){
		return this.id;
	}

	public String getTitle(){
		return this.title;
	}

	public String getAuthor(){
		return this.author;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setTitle(String title){
		this.title = title;
	}

	public void setAuthor(String author){
		this.author = author;
	}

	@Override
	public String toString() {
		return String.format(
			"Book[id=%d, title='%s', author='%s']",
			id, title, author);
		}
}
