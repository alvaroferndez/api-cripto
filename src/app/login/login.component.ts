import { Component } from '@angular/core';
import { AutentificacionService } from '../autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private iniciar = true;
  public correo = "";
  public contrasena = ""; 

  constructor(public auth:AutentificacionService) {
    
  }

  getIniciar() {
    return this.iniciar;
  }

  cambiarRegistrarse() {
    this.iniciar = false;
  }

  cambiarIniciar() {
    this.iniciar = true;
  }


  alta() {
    this.auth.alta(this.correo, this.contrasena);
    this.correo = "";
    this.contrasena = "";
  }

  altaGoogle(){
    this.auth.altaGoogle();
  }

  registro() {
    this.auth.registro(this.correo, this.contrasena);
    this.correo = "";
    this.contrasena = "";
  }

}
