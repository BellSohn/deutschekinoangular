import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';

@Component({
  selector: 'filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

	public titulo = "die bedeutenste deutsche Filme im Laufe des Jahres"
  //public clickArray = new Array(1).fill(false);
  public click = new Array;
  public count:number;
	public films:Array<Filme>;
	public directors:String[];
	public years = new Array;
  public indices = new Array;
  public datos = new Array;
	public infoFilm = new Array;



  constructor() {

  	this.films = [
  	new Filme("Wintergartenprogramm",1895,'kommerzielle','nicht bekannt','Max Skladanowsky',"wintergarten.jpg"),
  	new Filme("Der Student von Prag",1913,'Kunstfilm','Paul Wegener','Hanns Heinz Ewers',"studentprag.jpg"),    
  	new Filme("Carmen",1918,'Musical','Pola negri','Ernst Lubitsch','carmen.png'),
  	new Filme("Das Cabinet des Dr. Caligari", 1920,'expressionistische Stummfilm','Werner Krauß','Robert Wiene','caligari.jpg'),
  	new Filme("Nosferatu",1922,'Terror Stummfilm','Max Schreck','Friedrich Wilhelm Murnau','nosferatu.jpg'),
  	new Filme("Metropolis",1927,'Expressionismus Stummfilm','Brigitte Helm','Fritz Lang','metropoly.jpg'),
  	new Filme("Der blaue Engel",1930,'Drama','Marlene Dietrich',' Josef von Sternberg','blaueengel.png'),
  	new Filme("Berlin-Alexanderplatz",1931,'Drama','Heinrich George','Piel Jutzi','berlinalexander.jpg'),
    new Filme("Die Mörder sind unter uns",1946,'Drama','Hildegard Knef','Wolfgang Staudte','diemorder.jpg'),
  	new Filme("Es geschah am hellichten Tag",1958,'Drama-Krimi','Heinz Rühmann','Ladislao Vajda','geschahellichtem.jpg'),  	
  	new Filme("Abschied von gestern",1966,'Drama','Alexandra Kluge','Alexandra Kluge','abschiedgestern.jpg'),
    new Filme("Zur Sache, Schätzchen",1968,'Komödie','Uschi Glas','May Spils','sacheschatzen.jpg'),
  	new Filme("Der amerikanische Freund",1977,'Drama','Bruno Ganz','Wim Wenders','americanfriend.jpg'),
    new Filme("Das Boot",1981,'Historische','Jürgen Prochnow','Wolfgang Petersen','dasboot.jpg'),
    new Filme("Christianne F,wir Kinder von Bahnhof Zoo",1981,'Drama','Natja Brunckhorst','Uli Edel','christiannef.jpg'),
    new Filme("Lola rennt",1998,'Drama','Franka Potente','Tom Tykwer','lolarennt.jpg'),
    new Filme("Good Bye, Lenin!",2003,'Drama','Daniel Brühl','Wolfgang Becker','gblenin.jpg'),  
    new Filme("Der Untergang",2004,'Historische','Bruno Ganz','Oliver Hirschbiegel','untergang.jpg'),	
  	new Filme("Sophie Scholl,Die letzten Tage",2005,'Drama-Krimi','Julia Jentsch','Marc Rothemund','sophie.jpg'),  	
  	new Filme("Das Leben der Anderen",2006,'Drama-Thriller','Ulrich Mühe','Florian Henckel von Donnersmarck','lebenanderen.jpg'),
    
  	
  	
  	
  	
  	]

   }

  ngOnInit() {

  		this.films.forEach((film,index)=>{
        this.datos.push(film);
        
        //console.log(this.datos);
        
  		});
  }

  contador(){
    this.count+=1;
  }

  verInfoPorIndice(indice){

  	if(this.films.indexOf(indice)){  		
     
  		this.infoFilm.push(this.films[indice]);
  	
  		return this.infoFilm;
  	}

  }

}
