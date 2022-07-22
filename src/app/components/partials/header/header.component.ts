import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//collegamento immagine carrello
myimage:string="assets/images/shopping-cart.png";
//counter item del carrello
countNumber= 0;
//funzione per incrementare il counter del carrello
addBtn()
{
  this.countNumber=this.countNumber + 1;
}
//funzione per decrementare il counter del carrello
removeBtn()
{
  //if() fatto per evitare che la funzione di decremento porti il counter a -1
 if(this.countNumber>0) {
  this.countNumber=this.countNumber - 1;
}else{}
}

  constructor() { }

  ngOnInit(): void {
  }

}
