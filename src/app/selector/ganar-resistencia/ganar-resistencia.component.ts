import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ganar-resistencia',
  templateUrl: './ganar-resistencia.component.html',
  styleUrls: ['./ganar-resistencia.component.css']
})
export class GanarResistenciaComponent implements OnInit {

  nivelSeleccionado

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/hFDcoX7s6rE',
      actividad: 'Bandas elásticas:Coloca la banda alrededor de ambas piernas, justo encima de la rodilla. Párate erguido con los pies separados de los hombros. Mantén el pecho hacia arriba, la espalda recta y la cabeza recta.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/LNBjMRvOB5M',
      actividad: 'Lagartijas:La espalda debe estar recta en todo momento, con los hombros hacia atrás, la cabeza mirando al frente y el cuello recto, que no se tense.'
    },
    {
      numero: 3,
      videoUrl: 'https://www.youtube.com/embed/xFrGuyw1V8s',
      actividad: 'Tabla:Ponte en posición de tabla (como si fueras a realizar una flexión), conecta los dedos de los pies con el piso, aprieta los glúteos y alínea tu cabeza con la espalda.Aprieta fuertemente el abdomen y respira con tranquilidad.'
    },
    {
      numero: 4,
      videoUrl: 'https://www.youtube.com/embed/V5HYfZE78Ts',
      actividad: 'Correr:Corre al menos 10 minutos al día.'
    },
    {
      numero: 5,
      videoUrl: 'https://www.youtube.com/embed/6p-lDYPR2P8',
      actividad: 'Subir escaleras:Sube las escaleras de tu casa o trabajo.'
    }
  ]

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
