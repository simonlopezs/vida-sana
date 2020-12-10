import { Component } from '@angular/core';

@Component({
  selector: 'ganar-resistencia',
  templateUrl: './ganar-resistencia.component.html',
  styleUrls: ['./ganar-resistencia.component.css']
})
export class GanarResistenciaComponent {

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/hFDcoX7s6rE',
      imgUrl: 'https://apta.cdnpym.es/aptavs.com/contenido/imagenes/bandas-elasticas-para-entrenar-ejercicios-y-tipos-de-bandas_1100x500.jpg',
      actividad: 'Bandas elásticas:Coloca la banda alrededor de ambas piernas, justo encima de la rodilla. Párate erguido con los pies separados de los hombros. Mantén el pecho hacia arriba, la espalda recta y la cabeza recta.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/LNBjMRvOB5M',
      imgUrl: 'https://i.pinimg.com/originals/73/6f/1c/736f1c0fb9c957b77072a58086e8045c.gif',
      actividad: 'Lagartijas:La espalda debe estar recta en todo momento, con los hombros hacia atrás, la cabeza mirando al frente y el cuello recto, que no se tense.'
    },
    {
      numero: 3,
      videoUrl: 'https://www.youtube.com/embed/xFrGuyw1V8s',
      imgUrl: 'https://2.bp.blogspot.com/-F_o6fEBEuyc/WodJPrEk-VI/AAAAAAAAbB0/DTa3Nvy7Beg4R7D-UbGVb1NoiZ4NqE5OwCLcBGAs/s1600/step%2Bby%2Bstep%2Bexercises%2Bplank.gif',
      actividad: 'Tabla:Ponte en posición de tabla (como si fueras a realizar una flexión), conecta los dedos de los pies con el piso, aprieta los glúteos y alínea tu cabeza con la espalda.Aprieta fuertemente el abdomen y respira con tranquilidad.'
    },
    {
      numero: 4,
      videoUrl: 'https://www.youtube.com/embed/V5HYfZE78Ts',
      imgUrl: 'https://38.media.tumblr.com/tumblr_mczbv8PMxK1qmib1so1_500.gif',
      actividad: 'Correr:Corre al menos 10 minutos al día.'
    },
    {
      numero: 5,
      videoUrl: 'https://www.youtube.com/embed/Rbm6GXllBiw',
      imgUrl: 'https://media.tenor.com/images/2956b2bba56901cd23f17a03dcb32f1f/tenor.gif',
      actividad: 'Subir escaleras:Sube las escaleras de tu casa o trabajo.'
    }
  ]

}
