import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.css']
})
export class EstadoAnimoComponent {

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/1sqE6P3XyiQ',
      imgUrl: 'https://i2.wp.com/blog.soyrappi.com/wp-content/uploads/2019/10/shutterstock_181277675.jpg?fit=1000%2C667&ssl=1',
      actividad: 'Ejercicio cardiovascular:Anda en bicicleta 30 minutos al día.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/lDK9QqIzhwk',
      imgUrl: 'https://i.blogs.es/568e1a/istock-637560158/450_1000.jpg',
      actividad: 'Saltar la cuerda:Salta la cuerda al menos 10 minutos al día.'
    },
    {
      numero: 3,
      videoUrl: 'https://www.youtube.com/embed/ZhIsAZO5gl0',
      imgUrl: 'https://cdn-3.expansion.mx/e7/4a/516e79804ba1832e52c1532d2a1b/istock-701263280.jpg',
      actividad: 'Caminar:Camina unos 30 minutos diarios.'
    },
    {
      numero: 4,
      videoUrl: 'https://www.youtube.com/embed/cq8k-ZbsXDI',
      imgUrl: 'https://lh3.googleusercontent.com/-O4zUYXgAXBo/W5TsxX8M7AI/AAAAAAAADp8/8GYqzrcE1_UHj1_SHCBjEUb7gXt9U4f9QCHMYCw/s5000/%255BUNSET%255D',
      actividad: 'Yoga:Estírate al menos 30 minutos al día.'
    },
    {
      numero: 5,
      videoUrl: 'https://www.youtube.com/embed/zf2VYAtqRe0',
      imgUrl: '',
      actividad: 'Sigue los pasos:Si sigues todos los ejercicios mencionados en los distintos niveles, te sentirás genial.'
    }
  ]

}
