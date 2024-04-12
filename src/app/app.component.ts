import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { EjercicioCalculadora1Component } from './ejercicio-calculadora1/ejercicio-calculadora1.component';
import { EjercicioCalculadora2Component } from './ejercicio-calculadora2/ejercicio-calculadora2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1Component, Ejercicio2Component, Ejercicio3Component, Ejercicio4Component, EjercicioCalculadora1Component, EjercicioCalculadora2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios';
}
