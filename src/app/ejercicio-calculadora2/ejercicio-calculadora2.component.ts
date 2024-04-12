import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-calculadora2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-calculadora2.component.html',
  styleUrl: './ejercicio-calculadora2.component.css'
})
export class EjercicioCalculadora2Component {
  euro:number=0;
  libra:number=0;
  dolar:number=0;

  euroInput() {
    this.libra=this.euro*0.85;
    this.dolar=this.euro*1.15;
  }

  libraInput() {
    this.euro=this.libra*1.18;
    this.dolar=this.libra*1.38;
  }

  dolarInput() {
    this.euro=this.dolar*0.85;
    this.libra=this.dolar*0.72;
  }
}
