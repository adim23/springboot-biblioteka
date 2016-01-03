package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import java.util.List;
import biblioteka.models.Author;
import biblioteka.models.Copy;
import biblioteka.models.Image;
import java.util.stream.Collectors;
import com.fasterxml.jackson.annotation.JsonIgnore;

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

	@OneToMany(mappedBy="book", orphanRemoval=true)
	private List<Copy> copies;

	@ManyToOne
	@JoinColumn(name="id_image")
	private Image image;

	protected Book() {}
	public Book(String title, Author author, Image image) {
		this.title = title;
		this.author = author;
		this.image = image;
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

	public Image getImage(){
		return this.image;
	}

	@JsonIgnore
	public List<Copy> getCopiesAvailable(){
		return this.getCopies().stream()
	    .filter(c -> !c.getLoaned()).collect(Collectors.toList());
	}

	@JsonIgnore
	public List<Copy> getCopies(){
		return this.copies;
	}

	public void setCopies(List<Copy> copies){
		this.copies = copies;
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

	public void setImage(Image image){
		this.image = image;
	}
}
