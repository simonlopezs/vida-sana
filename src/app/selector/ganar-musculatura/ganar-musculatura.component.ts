import { Component } from '@angular/core';

@Component({
  selector: 'ganar-musculatura',
  templateUrl: './ganar-musculatura.component.html',
  styleUrls: ['./ganar-musculatura.component.css']
})
export class GanarMusculaturaComponent {

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/HgzGwKwLmgM',
      imgUrl: 'https://saludycardiologia.com/wp-content/uploads/2018/03/Nataci%C3%B3n-peq-1200x727.jpg',
      actividad: 'Natación:Te recomendamos nadar 15 minutos al día'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/PIb6AZdTr-A',
      imgUrl: 'https://www.rocfit.com/consejos-fitness/wp-content/uploads/2016/04/curl-de-biceps-en-maquina-de-remo.jpg',
      actividad: 'Remo:Con las piernas estiradas, tira del remo hacia el pecho, doblando los codos hacia los lados y dejando el remo justo por debajo del pecho. Mantén el remo mientras extiendes los brazos y vuelve a repetir el movimiento.'
    },
    {
      numero: 3,
      videoUrl: 'https://www.youtube.com/embed/SwYN7mTi6HM',
      imgUrl: 'https://i.pinimg.com/originals/6f/35/43/6f3543d8488800b14d89c7bf9456e90e.gif',
      actividad: 'Press militar:Las manos deben estar sobre la barra algo más separadas que la anchura de los hombros. Con la espalda bien recta, lleva la barra con las manos hasta la parte alta del pecho, casi a la altura de los hombros y desde allí comienza el ejercicio.'
    },
    {
      numero: 4,
      videoUrl: 'https://www.youtube.com/embed/KrZHPOeOxQQ',
      imgUrl: 'https://media.giphy.com/media/xT9IgJgzofWM4bZgis/giphy.gif',
      actividad: 'Sentadillas:Abre tus piernas hasta el ancho de tus hombros. Junta tus manos o estira tus brazos en un ángulo de 90 grados. Cuando vayas a bajar, mantén los glúteos hacia atrás. Haz como si fueras a sentarte en una silla imaginaria.'
    },
    {
      numero: 5,
      videoUrl: 'https://www.youtube.com/embed/eH3giaIzONA',
      imgUrl: 'https://i.pinimg.com/originals/70/0f/17/700f1724723acbd7f0d78e32b57f32e8.gif',
      actividad: 'Puente de glúteo:Acuéstate boca arriba con las manos a los lados y las rodillas dobladas. Levanta las caderas de la colchoneta, manteniendo la espalda recta, y haz una pausa de 1 segundo. Vuelve a la posición inicial y repite el movimiento hasta que el set esté completo.'
    }
  ]


}
