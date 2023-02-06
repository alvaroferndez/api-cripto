import { Component, Output, EventEmitter } from '@angular/core';
import { AlmacenCriptoService } from '../almacen-cripto.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  datos:any=[];


  constructor(private datosApi:AlmacenCriptoService){
    this.datos = datosApi.lista_monedas;
  }


  agregarMoneda(moneda:any){
    this.datosApi.guardarMoneda(moneda)
  }
}
