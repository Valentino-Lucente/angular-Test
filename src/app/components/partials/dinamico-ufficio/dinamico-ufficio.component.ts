import { Component, OnInit } from '@angular/core';
import { ArticoloUfficio } from 'src/app/models/articoloUfficio.models';
@Component({
  selector: 'app-dinamico-ufficio',
  templateUrl: './dinamico-ufficio.component.html',
  styleUrls: ['./dinamico-ufficio.component.css']
})
export class DinamicoUfficioComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  articolo1: ArticoloUfficio = {
    nomeArticolo: "Matita",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 15,
    dataUpload: "2020/08/17",
    recensioni: "Veramente utile!!",
    voto: 7,
    immagine: "/assets/img/sito-matita.jpg"
  };
  articolo2: ArticoloUfficio = {
    nomeArticolo: "Pennarello",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 5,
    dataUpload: "2022/07/20",
    recensioni: "Veramente fico!!",
    voto: 7,
    immagine: "/assets/img/sito-pennarello.jpg"
  };
  articolo3: ArticoloUfficio = {
    nomeArticolo: "Righello",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 1,
    dataUpload: "2022/01/24",
    recensioni: "Veramente coatto!!",
    voto: 7,
    immagine: "/assets/img/sito-righello.jpg"
  };
  articolo4: ArticoloUfficio = {
    nomeArticolo: "Evidenziatore",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 0,
    dataUpload: "2022/02/15",
    recensioni: "Veramente eccezionale!!",
    voto: 7,
    immagine: "/assets/img/evidenziatore.jpg"


  };
  articolo5: ArticoloUfficio = {
    nomeArticolo: "Quattrocolori",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 8,
    dataUpload: "2022/12/30",
    recensioni: "Veramente da paura!!",
    voto: 7,
    immagine: "/assets/img/sito-quattrocolori.jpg"


  };
  articolo6: ArticoloUfficio = {
    nomeArticolo: "Gomma",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 9,
    dataUpload: "2022/02/28",
    recensioni: "Veramente da paura!!",
    voto: 7,
    immagine: '/assets/img/sito-gomma.jpg'


  };
  articolo7: ArticoloUfficio = {
    nomeArticolo: "Temperamatite",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 12,
    dataUpload: "2022/07/09",
    recensioni: "Veramente da paura!!",
    voto: 7,
    immagine: "/assets/img/sito-temperamatite.jpg"


  };
  articolo8: ArticoloUfficio = {
    nomeArticolo: "Quaderno",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 29,
    dataUpload: "2022/01/07",
    recensioni: "Veramente da paura!!",
    voto: 7,
    immagine: "/assets/img/sito-quaderno.jpg"

  };
  articolo9: ArticoloUfficio = {
    nomeArticolo: "Blocknotes",
    tipologia: "Cancelleria",
    idArticolo: 1000,
    prezzo: 9.5,
    quantita: 100,
    numeroVendite: 32,
    dataUpload: "2022/11/11",
    recensioni: "Veramente da paura!!",
    voto: 7,
    immagine: "/assets/img/sito-blocknotes.jpeg"


  };
  //array di articoli.
  articoli: ArticoloUfficio[]= [this.articolo1,this.articolo2,this.articolo3,this.articolo4,this.articolo5,this.articolo6,this.articolo7,this.articolo8,this.articolo9]

  //metodo per ordinare gli articoli per data decrescente (che deve essere scritta nel formato anno/mese/giorno)

  articoliData: ArticoloUfficio[] = this.articoli.sort((a,b)=> (a.dataUpload > b.dataUpload ? -1 : 1));

  //metodo per ordinare gli articoli per numero di vendite decrescente.
  articoliVendite: ArticoloUfficio[] = this.articoli.sort((a,b)=> (a.numeroVendite > b.numeroVendite ? -1 : 1));

  /*ordinaPerData(){
    this.articoli=this.articoliData;
     this.articoliData.sort((a,b)=> (a.dataUpload > b.dataUpload ? -1 : 1));
  }
  ordinaPerVendite(){
    this.articoli=this.articoliVendite;
    this.articoliVendite.sort((a,b)=> (a.numeroVendite > b.numeroVendite ? -1 : 1));
  }*/


}

