import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlmacenCriptoService } from '../almacen-cripto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id_moneda:any;

  constructor(private http:HttpClient, private route:ActivatedRoute, public datosApi: AlmacenCriptoService){
    this.id_moneda = this.route.snapshot.paramMap.get('id')
    this.obtenerDatos()
  }

  obtenerDatos(){
    this.datosApi.obtenerDatosDetalle(this.id_moneda)

  }

}
