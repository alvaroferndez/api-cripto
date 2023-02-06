import { Component, Input } from '@angular/core';
import { AlmacenCriptoService } from '../almacen-cripto.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  @Input() lista= new Array<any>();

  constructor(private datosApi: AlmacenCriptoService) {
    
  }

  eliminarMoneda(moneda:any){
    this.datosApi.eliminarMoneda(moneda)
  }
}