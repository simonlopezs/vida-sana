import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  @Input() titulo: string;
  @Input() image: string
  @Input() niveles: any[] = []
  nivelSeleccionado: any

  @ContentChild('actions', { static: false }) actionsRef: TemplateRef<any>
  
  constructor() { }

  ngOnInit() {
  }

  textoActividad(actividad: string) {
    return actividad.split(':')
  }

  get actividad() {
    return this.nivelSeleccionado.actividad
  }

}
