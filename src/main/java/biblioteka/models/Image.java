package biblioteka.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="images")
public class Image {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	private String path;

	protected Image() {}
	public Image(String path) {
		this.path = path;
	}

	public long getId(){
		return this.id;
	}

	public String getPath(){
		return this.path;
	}

	public void setId(long id){
		this.id = id;
	}

	public void setPath(String path){
		this.path = path;
	}
}
