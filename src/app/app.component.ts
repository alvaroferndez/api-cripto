import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'criptomonedas';
  lista_monedas = new Array<any>();

  capturaEvento(dato:any){
    this.lista_monedas.push(dato);
    console.log(this.lista_monedas)
  }
}
