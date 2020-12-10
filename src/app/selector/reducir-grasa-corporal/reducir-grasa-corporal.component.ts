import { Component } from '@angular/core';

@Component({
  selector: 'reducir-grasa-corporal',
  templateUrl: './reducir-grasa-corporal.component.html',
  styleUrls: ['./reducir-grasa-corporal.component.css']
})
export class ReducirGrasaCorporalComponent {

  niveles = [
    {
      numero: 1,
      videoUrl: 'https://www.youtube.com/embed/9jK-NcRmVcw',
      imgUrl: 'https://www.superprof.cl/blog/wp-content/uploads/2019/07/hacer-zumba-adelgazar.jpg',
      actividad: 'Bailar:Bailar 30 minutos diarios.'
    },
    {
      numero: 2,
      videoUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
      imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/0Xiqpo7pxrKz5CKcRl7XYrKegko/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/02/27/847/n/1922729/1baf9ec0f5ce4ea9_burpee.3.gif',
      actividad: 'Burpees:Parte de una posición inicial de sentadillas y coloca las manos en el suelo. Se mantiene la cabeza erguida. Después desplaza las piernas hacia atrás con los pies juntos mientras hace una flexión de pecho (flexión de codos).'
    },
    { numero: 3, 
      videoUrl: 'https://www.youtube.com/embed/yWP__YnKzsI',
      imgUrl: 'https://i0.wp.com/theacemonkeystore.com/wp-content/uploads/2020/04/ELIPTICA-GIF.gif?fit=1280%2C720&ssl=1',
      actividad: 'Bicicleta elíptica:Usa la elíptica unos 10 minutos diarios.'
    },
    { numero: 4, 
      videoUrl: 'https://www.youtube.com/embed/Kc71KZG87X4',
      imgUrl: 'http://k30.kn3.net/taringa/6/0/2/6/7/8/koloreitor/1CA.gif',
      actividad: 'Spinning:Empieza haciendo un calentamiento de entre 5 y 10 minutos. Luego pedalea durante 5 minutos, con 5 segundos de alta intensidad cada 5 minutos. Dedica 4 minutos a recuperarte, con un pedaleo cómodo.'
    },
    { numero: 5, 
      videoUrl: 'https://www.youtube.com/embed/pAgnJDJN4VA',
      imgUrl: 'https://www.comunidadfitnessecuador.com/wp-content/uploads/2014/03/JumpBox-1.gif',
      actividad: 'Saltor el cajón:Da un brinco en vertical y un poco hacia adelante, sobre una caja que está a una altura específica. Acaba sobre ella cayendo con ambos pies a la vez y terminando en una completa extensión de rodillas y cadera.'
    }
  ]

}
