import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/Actor';

@Component({
  selector: 'app-actres',
  templateUrl: './actres.component.html',
  styleUrls: ['./actres.component.css']
})
export class ActresComponent implements OnInit {

	public title = "Die berühmteste deutschen Schauspielerinnen"
	public allActress = new Array;
	public datos = new Array;

  constructor() {
  			this.allActress = [
  			new Actor('Marlene Dietrich','Deutschland','Dezember 1901','Schöneberg-Berlin','Mai 1992','Marlen_d.jpg'),	
  			new Actor('Rommy Schneider','deutsche-französische','September 1938','Wien','Mai 1982','Rommy.jpg'),
  			new Actor('Senta Berger',' österreichisch-deutsche','Mai 1941','Wien','','Senta_Berger.jpg'),
  			new Actor('Hannelore Elsner','Deutschland','Juli 1942','Burghausen','April 2019','Hannelore_Elsner.jpg'),
  			new Actor('Hannelore Hoger','Deutschland','August 1942','Hamburg','','Hannelore-Hoger.jpg'),
  			new Actor('Corinna Harfouch','Deutschland','Oktober 1954','Suhl','','Corinna_Harfouch.jpg'),
  			new Actor('Lilli Palmer','deutsch-britisch-schweizerische','Mai 1914','Posen','Januar 1986','Lili_Palmer.jpg'),
  			new Actor('Hildegard Knef','Deutschland','Dezember 1925','Ulm','Februar 2002','Hildegard_Knef.jpg'),
  			new Actor('Veronica Ferres','Deutschland','Juni 1965','Solingen','','veronica_ferres.jpg'),
  			new Actor('Alexandra Maria Lara','deutsch-rumänische','November 1978','Bukarest','','aamaria-lara.jpg'),
  			new Actor('Karoline Herfurth','Deutschland','Mai 1984','Ost-Berlin','','Karoline_Herfurth.jpg'),
  			new Actor('Maria Furtwängler','Deutschland','September 1966','München','','Maria_Furt.jpg'),
  			new Actor('Katja Riemann','Deutschland','November 1963',' Kirchweyhe','','Katja_Riemann.jpg'),
  			new Actor('Diane Kruger','deutschamerikanische','Juli 1976','Algermissen','','Diane_Kr.jpg'),
  			new Actor('Suzanne von Borsody','Deutschland','September 1957','München','','Suzanne_Borsody.jpg'),
  			new Actor('Martina Gedeck','Deutschland','September 1961','München','','Martina_Gedeck.jpg'),
  			new Actor('Nastassja Kinski','Deutschland','Januar 1961','West-Berlin','','Nastassja_Kinski.jpg'),
  			new Actor('Nina Hoss','Deutschland','Juli 1975','Stuttgart','','Nina_Hoss.jpg'),
  			new Actor('Eva Mattes',' deutsch-österreichische','Dezember 1954','Tegernsee','','Eva_Mattes.jpg'),
  			new Actor('Juliane Köhler','Deutschland','August 1965','Göttingen','','Juliane-köhler.jpg')
  			];


   }

  ngOnInit() {

  	this.allActress.forEach((actress,index)=>{
  		this.datos.push(actress);
  	});

  }

}
