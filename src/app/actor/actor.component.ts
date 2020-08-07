import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

	public titulo:string = "Die berühmteste deutschen Schausspielern";
	public AlleActors = new Array;
	public datos =  new Array;

  constructor() {

  		this.AlleActors = [

  		new Actor('Heinz Rühmann','Deutschland','März 1902','Essen','Oktober 1994','Heinz_Rühmann.jpg'),
  		new Actor('Klaus Kinsky','Deutschland','Oktober 1926','Danzig','November 1991','Klaus_Kinski.jpg'),
  		new Actor('Udo Kier','Deutschland','Oktober 1944','Köln-Lindenthal','','udo_kier.jpg'),
  		new Actor('Heiner Lauterbach','Deutschland','April 1953','Köln','','Heiner_Lauterbach.jpg'),
  		new Actor('Mario Adorf','deutsch-Schweiz','September 1930','Zurich','','Mario_Adorf.jpg'),
  		new Actor('Jürgen Vogel','Deutschland','April 1968','Hamburg','','Jürgen_Vogel.jpg'),
  		new Actor('Matthias Brandt','Deutschland','Oktober 1961','West-Berlin','','Matthias_Brandt.jpg'),
  		new Actor('Henry Hübchen','Deutschland','Februar 1947','Berlin-Charlottenburg','','Henry_Hubchen.jpg'),
  		new Actor('Armin Mueller-Stahl','Deutschland','Dezember 1930','Tilsit','','Armin_muellerl.jpg'),
  		new Actor('August Diehl','Deutschland','Januar 1976','West-Berlin','','August_Diehl.jpg'),
  		new Actor('Georg Götz','Deutschland','Juli 1938','Berlin','Juni 2016','GötzGeorge.jpg'),
  		new Actor('Thomas Kretschmann','Deutschland','September 1962','Dessau','','Thomas_Kretschmann.jpg'),
  		new Actor('Christoph Maria Herbst','Deutschland','Februar 1966','Wuppertal','','Christoph-Herbst.jpg'),
  		new Actor('Hinnerk Schönemann','Deutschland','November 1974','Rostock','','Schönemann.jpg'),
  		new Actor('Jan Josef Liefers','Deutschland','August 1964','Dresden','','Jan_Liefers.jpg'),
  		new Actor('Christoph Waltz','deutsch-österreichischer','Oktober 1965','Wien','','Christoph_Waltz.jpg'),
  		new Actor('Daniel Brühl González','deutsch-spanische','Juni 1978','Barcelona','','Daniel_Brühl.jpg'),
  		new Actor('Josef Bierbichler','Deutschland','April 1948','Ambach','','Josef_Bierbichler.jpg'),
  		new Actor('Tom Schilling','Deutschland','Februar 1982','Ost-Berlin','','Tom_Schilling.jpg'),
  		new Actor('Sebastian Koch','Deutschland','Mai 1962','Karlruhe','','Sebastian_Koch.jpg')

  		];


   }

  ngOnInit() {
  	this.AlleActors.forEach((actor,index)=>{
  			this.datos.push(actor);
  	});


  }

}
