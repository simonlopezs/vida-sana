import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.css']
})
export class EstadoAnimoComponent implements OnInit {

  nivelSeleccionado

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/1sqE6P3XyiQ',
      actividad: 'Ejercicio cardiovascular:Anda en bicicleta 30 minutos al día.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/yURRmWtbTbo',
      actividad: 'Saltar la cuerda:Salta la cuerda al menos 10 minutos al día.'
    },

    {
      numero: 3,
      videoUrl: 'https://www.youtube.com/embed/ZhIsAZO5gl0',
      actividad: 'Caminar:Camina unos 30 minutos diarios.'
    },
    {
      numero: 4,
      videoUrl: 'https://www.youtube.com/embed/cq8k-ZbsXDI',
      actividad: 'Yoga:Estírate al menos 30 minutos al día.'
    },
    {
      numero: 5,
      videoUrl: 'https://www.youtube.com/embed/zf2VYAtqRe0',
      actividad: 'Sigue los pasos:Si sigues todos los ejercicios mencionados en los distintos niveles, te sentirás genial.'
    }
  ]
  url
  constructor() {

  }

  textoActividad(actividad: string){
    return actividad.split(':')
  }

  get actividad(){
    return this.nivelSeleccionado.actividad
  }

  ngOnInit() {
  }

}
