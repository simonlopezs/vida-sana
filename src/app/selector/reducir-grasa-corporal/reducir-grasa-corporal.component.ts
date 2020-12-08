import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reducir-grasa-corporal',
  templateUrl: './reducir-grasa-corporal.component.html',
  styleUrls: ['./reducir-grasa-corporal.component.css']
})
export class ReducirGrasaCorporalComponent implements OnInit {


  nivelSeleccionado

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/ARt9HV9T0w8',
      actividad: 'Bailar:Bailar 30 minutos diarios.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
      actividad: 'Burpees:Parte de una posición inicial de sentadillas y coloca las manos en el suelo. Se mantiene la cabeza erguida. Después desplaza las piernas hacia atrás con los pies juntos mientras hace una flexión de pecho (flexión de codos).'
    },
    { numero: 3, 
      videoUrl: 'https://www.youtube.com/embed/htgr3pvBr-I',
      actividad: 'Bicicleta elíptica:Usa la elíptica unos 10 minutos diarios.'
    },
    { numero: 4, 
      videoUrl: 'https://www.youtube.com/embed/Kc71KZG87X4',
      actividad: 'Spinning:Empieza haciendo un calentamiento de entre 5 y 10 minutos. Luego pedalea durante 5 minutos, con 5 segundos de alta intensidad cada 5 minutos. Dedica 4 minutos a recuperarte, con un pedaleo cómodo.'
    },
    { numero: 5, 
      videoUrl: 'https://www.youtube.com/embed/pAgnJDJN4VA',
      actividad: 'Saltor el cajón:Da un brinco en vertical y un poco hacia adelante, sobre una caja que está a una altura específica. Acaba sobre ella cayendo con ambos pies a la vez y terminando en una completa extensión de rodillas y cadera.'
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
