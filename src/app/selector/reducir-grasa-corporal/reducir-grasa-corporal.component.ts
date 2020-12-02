import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reducir-grasa-corporal',
  templateUrl: './reducir-grasa-corporal.component.html',
  styleUrls: ['./reducir-grasa-corporal.component.css']
})
export class ReducirGrasaCorporalComponent implements OnInit {

 
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
