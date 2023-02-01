import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  @Input() moneda = new Object;
  datos:any=[""];

  constructor(private http:HttpClient){
    this.lanzaPeticion()
  }

  lanzaPeticion(){
    console.log(this.moneda)
  }

}
