package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.FetchType;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnore;
import biblioteka.models.Book;

@Entity
@Table(name="authors")
public class Author {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String author;

	@OneToMany(mappedBy="author")
	private List<Book> books;

	protected Author() {}
	public Author(String author) {
		this.author = author;
	}

	public long getId(){
		return this.id;
	}

	@JsonIgnore
	public List<Book> getBooks(){
		return this.books;
	}

	public void setBooks(List<Book> books){
		this.books = books;
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
}
