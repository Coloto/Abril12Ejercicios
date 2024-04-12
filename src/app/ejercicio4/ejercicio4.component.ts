import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  ejercicio4() {
    /* EXERCISE 4
    TODO: Declare the array as the type to match the type of the items in the
    array. */
    let randomNumbers: Array<number> = [];
    let nextNumber:number;
    for (let i = 0; i < 10; i++) {
      nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      randomNumbers.push(nextNumber);
    }
    console.log(randomNumbers);
  }
}
