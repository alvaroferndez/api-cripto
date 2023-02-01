import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  @Output() primerEvento = new EventEmitter<object>();

  agregarMoneda(moneda:object){
    this.primerEvento.emit(moneda);
  }

  // ensenarMonedas(){
  //   this.primerEvento.emit(this.monedas_elegidas);
  // }


}
