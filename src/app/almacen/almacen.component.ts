import { Component } from '@angular/core';
import { AlmacenCriptoService } from '../almacen-cripto.service';
import { Firestore, collectionData, collection, query, setDoc, where, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { AutentificacionService } from '../autentificacion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
  public favoritas_api = new Array;
  public favoritas = new Array;
  public db:any;

  constructor(private http:HttpClient, public datosApi: AlmacenCriptoService, private firestore: Firestore, private auth:AutentificacionService) {
    this.datosApi.obtenerFavoritas();
  }
}
