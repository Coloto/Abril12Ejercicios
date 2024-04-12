import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  ejercicio2() {
    /* EJERCICIO 2
    TODO: Puede utilizar tipos para garantizar los resultados de la operación.
    Ejecute el código tal cual y luego modifíquelo.
    que tenga variables fuertemente tipadas. Luego, solucione los errores que
    encuentre para que el resultado
    devuelto a a es 12. */
    let x:any;
    let y:number;
    let a:number;
    x = 'five';
    y = 7;
    if(x=="five"){
      x=<number>5;
    }
    a = x + y;
    console.log(a);
  }
}
