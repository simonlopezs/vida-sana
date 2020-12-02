import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ganar-musculatura',
  templateUrl: './ganar-musculatura.component.html',
  styleUrls: ['./ganar-musculatura.component.css']
})
export class GanarMusculaturaComponent implements OnInit {

 
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
