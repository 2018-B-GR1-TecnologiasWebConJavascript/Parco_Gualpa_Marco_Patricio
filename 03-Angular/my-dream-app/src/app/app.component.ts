//const Component = requir('@angular/core').Component
import { Component } from '@angular/core';  //TS


@Component({ //decorador es una funcion que se ejecuta antes sirve para ahorrar tiempo
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  @otroDecorador()
  title = 'my-dream-app';
  @DecoradorMetodo()

}
