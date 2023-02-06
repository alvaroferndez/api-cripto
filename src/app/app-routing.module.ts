import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import	{LandinpageComponent} from './landinpage/landinpage.component';
import	{LoginComponent} from './login/login.component';
import	{DetalleComponent} from './detalle/detalle.component';
import	{GraficaComponent} from './grafica/grafica.component';
import { PrivacidadGuard } from './privacidad.guard';



const routes: Routes = [
  {
    path : 'login',
    component: LoginComponent, 
    // canActivate: [!PrivacidadGuard]
  },
  {
    path : '',
    component: LandinpageComponent, 
  },
  {
    path : 'detalle/:id',
    component: DetalleComponent,
    canActivate: [PrivacidadGuard]
  },
  {
    path : 'detalle/:id/grafica',
    component: GraficaComponent,
    canActivate: [PrivacidadGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ PrivacidadGuard ]
})
export class AppRoutingModule { }
