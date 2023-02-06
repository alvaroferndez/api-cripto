import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { AlmacenCriptoService } from '../almacen-cripto.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {
  id_moneda:any;
 
  constructor(public http : HttpClient, public datosApi:AlmacenCriptoService, private route:ActivatedRoute) {
    this.id_moneda = this.route.snapshot.paramMap.get('id')  
  }
 
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:this.datosApi.datos_detalle.name,
    },
    subtitles: [{
      text: "Cargando datos...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    data: [{
      type: "line",
      name: "Closing Price",
      yValueFormatString: "€#,###.00",
      xValueType: "dateTime",
      dataPoints: this.datosApi.dataPoints
    }]
  }
 
  getChartInstance(chart: object) {
    this.datosApi.chart = chart;
  }
  
  ngAfterViewInit() {
    this.datosApi.cargarDatosGrafica(this.id_moneda)
    this.datosApi.obtenerDatosDetalle(this.id_moneda)
  }  
}
