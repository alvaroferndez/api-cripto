import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlmacenCriptoService {
  public lista_monedas = new Array<any>();

  constructor(private http:HttpClient) { 
    this.obtenerDatos()
  }

  obtenerDatos() {
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any) => {
        for(let element of datos){
          this.lista_monedas.push({
            id : element.id,
            nombre : element.name,
            imagen : element.image,
          })
        }
      }
    )
  }
}
