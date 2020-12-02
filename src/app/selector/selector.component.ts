import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  modulos = [
    { ruta: '/estado-animo', titulo: 'Mejorar estado de ánimo' },
    { ruta: '/reducir-grasa', titulo: 'Reducir grasa' },
    { ruta: '/ganar-musculatura', titulo: 'Ganar musculatura' },
    { ruta: '/ganar-resistencia', titulo: 'Ganar resistencia' },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
