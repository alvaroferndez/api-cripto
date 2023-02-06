import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection, query, setDoc, where, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class AlmacenCriptoService {
  public lista_monedas = new Array<any>();
  public favoritas_api = new Array;
  public favoritas = new Array;
  public datos_detalle:any;
  public dataPoints:any = [];
  public chart:any;
  public db:any;

  constructor(private http:HttpClient, private firestore: Firestore, private auth:AutentificacionService) { 
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
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

  obtenerFavoritas(){
    this.db = collection(this.firestore,"monedas");
    collectionData(query(this.db, where("usuario", "==", this.auth.id_usuario_activo))).subscribe((datos) => {this.favoritas_api = datos;this.tratarDatos(); setInterval(this.tratarDatos,5000)});
  }

  tratarDatos(){
      this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
      (datos:any) => {
        this.favoritas = [];
        for(let moneda of this.favoritas_api)
          datos.map((mon:any) => {
            if(mon.id ==moneda.id){
              this.favoritas.push(mon)
            }
          })
        console.log(this.favoritas)
      })
  }
  
  guardarMoneda(moneda:any){
    setDoc(doc(this.firestore, "monedas", moneda.id + '-' + this.auth.id_usuario_activo ), {
      id: moneda.id,
      usuario: this.auth.id_usuario_activo,
    });
  }

  obtenerDatosDetalle(id_moneda:string){
    this.http.get("https://api.coingecko.com/api/v3/coins/"+id_moneda).subscribe(
      (datos:any) => {
        this.datos_detalle = datos;
    })
  }

  eliminarMoneda(moneda:any){
    deleteDoc(doc(this.firestore, "monedas", moneda + '-' + this.auth.id_usuario_activo));
  }

  cargarDatosGrafica(id_moneda:string){
    this.http.get('https://api.coingecko.com/api/v3/coins/' + id_moneda + '/market_chart?vs_currency=eur&days=max').subscribe((datos: any) => {
      let data = datos.prices;
      for(let i = 0; i < data.length; i++){
        this.dataPoints.push({x: new Date(data[i][0]), y: Number(data[i][1]) });
      }
      this.chart.subtitles[0].remove();
    });
  }
}