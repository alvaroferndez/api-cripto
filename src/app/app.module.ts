import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { DetalleComponent } from './detalle/detalle.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LandinpageComponent } from './landinpage/landinpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GraficaComponent } from './grafica/grafica.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    DetalleComponent,
    LandinpageComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent,
    AlmacenComponent,
    LoginComponent,
    GraficaComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
