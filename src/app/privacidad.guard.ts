import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class PrivacidadGuard implements CanActivate {
  constructor(public auth:AutentificacionService, public route:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.auth.usuario_activo){
        return true
      }else{
        this.route.navigate(['/'])
        return false;
      }
      ;
  }
}
