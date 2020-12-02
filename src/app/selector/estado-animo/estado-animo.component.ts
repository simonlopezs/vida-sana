import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.css']
})
export class EstadoAnimoComponent implements OnInit {

  nivelSeleccionado

  niveles = [
    { numero: 1, videoUrl: 'https://www.youtube.com/embed/JW1ctXVM4og' },
    { numero: 2, videoUrl: 'https://www.youtube.com/embed/WYeAUpvWeI8' },
    { numero: 3, videoUrl: 'https://www.youtube.com/embed/0G383538qzQ' },
    { numero: 4, videoUrl: 'https://www.youtube.com/embed/ilNEqmfUyzI' }
  ]
url
  constructor() {

   }

  ngOnInit() {
  }

}
