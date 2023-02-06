import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from '../autentificacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth:AutentificacionService) {
    
  }

  
  comprobar(){
    if(this.auth.usuario_activo)
      return true;
    else{
      return false
    }
  }

  desloguear(){
    this.auth.desloguear();
  }
}
