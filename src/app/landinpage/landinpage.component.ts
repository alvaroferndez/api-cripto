import { Component } from '@angular/core';
import { AutentificacionService } from '../autentificacion.service';

@Component({
  selector: 'app-landinpage',
  templateUrl: './landinpage.component.html',
  styleUrls: ['./landinpage.component.css']
})
export class LandinpageComponent {


  constructor(private auth:AutentificacionService) {
    
  }

  
  comprobar(){
    if(this.auth.usuario_activo)
      return true;
    else{
      return false
    }
  }
}
