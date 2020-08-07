import { Component, OnInit } from '@angular/core';
import { Regi } from '../models/regi';

@Component({
  selector: 'regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {

	public titulo:string = "die deutsche Regisseure"
	public alleRegis = new Array;
	public datos = new Array;

  constructor() {

  			this.alleRegis = [
  			new Regi('Wyler,William','1902','1981','Mülhausen','LA USA',20,3),
  			new Regi('Wortmann,Sönke','1959','','Marl','',16,0),
  			new Regi('Wenders, Wim','1945','','Düsseldorf','',23,0),
  			new Regi('von Trotta, Margarethe','1942','','Berlin','',20,0),
  			new Regi('Vohrer, Alfred','1914','1986','Stuttgart','München',43,0),
  			new Regi('Tykwer, Tom','1965','','Wuppertal','',12,0),
  			new Regi('Thome, Rudolf','1939','','Wallau','',24,0),
  			new Regi('Thiele,Rolf','1918','1994','Prödlitz','München',39,0),
  			new Regi('Stemmle, Robert A.','1903','1974','Magdeburg','Baden-Baden',26,0),
  			new Regi('Staudte, Wolfgang','1906','1984','Saarbrücken','Žigarski',31,0),
  			new Regi('Detlef Sierck','1897','1987','Hamburg','Lugano',24,0),
  			new Regi('Siodmak, Robert','1900','1973','Dresden','Locarno',40,0),
  			new Regi('Schweiger, Til','1900','','Freiburg','',12,0),
  			new Regi('Schlöndorff, Volker','1939','','Wiesbaden','',17,0),
  			new Regi('Roehler, Oskar','1959','','Starnberg','',14,0),
  			new Regi('Riefenstahl, Leni','1902','2002','Berlin','BAY',6,0),
  			new Regi('Piel, Harry','1892','1963','Benrath bei Düsseldorf','München',46,0),
  			new Regi('Petzold, Christian','1960','','Hilden','',13,0),
  			new Regi('Petersen, Wolfgang','1941','','Emden','',16,0),
  			new Regi('Murnau, Friedrich-Wilhelm','1888','1931','Bielefeld','Santa Barbara US',22,0),
  			new Regi('Lubitsch, Ernst','1892','1947','Berlin','LA US',20,0),
  			new Regi('Link, Caroline','1964','','Bad Nauheim','',6,0),
  			new Regi('Lang, Fritz ','1890','1976','Wien','LA, USA',37,0),
  			new Regi('Fassbinder, Rainer Werner','1946','1982','Bad Wörishofen','München',10,0),
  			new Regi('Emmerich, Roland','1955','','Stuttgart','',17,0),




  			]


   }

  ngOnInit(){

  			this.alleRegis.forEach((regi,index)=>{
  					this.datos.push(regi);
  					/*console.log(this.datos);*/
  			});


  }

}
