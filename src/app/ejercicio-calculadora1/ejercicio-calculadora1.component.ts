import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-calculadora1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-calculadora1.component.html',
  styleUrl: './ejercicio-calculadora1.component.css'
})
export class EjercicioCalculadora1Component {
  x:number = 0;
  y:number = 0;
  resultado:number = 0;
  sumar():void {
    this.resultado = this.x+this.y;
  }

  restar():void {
    this.resultado = this.x-this.y;
  }

  multiplicar():void {
    this.resultado = this.x*this.y;
  }

  dividir():void {
    this.resultado = this.x/this.y;
  }
}
