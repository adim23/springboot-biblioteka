package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import biblioteka.models.Author;

@Entity
@Table(name="books")
public class Book {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String title;

	@ManyToOne
	@JoinColumn(name="id_author")
	private Author author;

	protected Book() {}
	public Book(String title, Author author) {
		this.title = title;
		this.author = author;
	}

	public long getId(){
		return this.id;
	}

	public String getTitle(){
		return this.title;
	}

	public Author getAuthor(){
		return this.author;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setTitle(String title){
		this.title = title;
	}

	public void setAuthor(Author author){
		this.author = author;
	}

	@Override
	public String toString() {
		return String.format(
			"Book[id=%d, title='%s', author='%s']",
			id, title, author);
		}
}
