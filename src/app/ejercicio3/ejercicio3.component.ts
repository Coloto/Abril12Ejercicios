import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  season:string = '';
  ejercicio3() {
    // * EJERCICIO 3
    // TODO: En el siguiente código, implemente un tipo de enumeración llamado Temporada que representa
    // las constantes "Otoño", "Invierno", "Primavera" y "Verano". Luego, actualice la función para que
    // puedes pasar la temporada haciendo referencia a un elemento en la enumeración, por ejemplo
    // Season.Fall, en lugar de la cadena literal "Fall". */
    enum Season {
      Fall = "Fall",
      Winter = "Winter",
      Spring = "Spring",
      Summer = "Summer"
    }

    function whichMonths(season:string) {
      let monthsInSeason: string;
      switch (season) {
        case Season.Fall:
          monthsInSeason = "September to November";
          return monthsInSeason;
        case Season.Winter:
          monthsInSeason = "December to February";
          return monthsInSeason;
        case Season.Spring:
          monthsInSeason = "March to May";
          return monthsInSeason;
        case Season.Summer:
          monthsInSeason = "June to August";
          return monthsInSeason;
      }
      return null;
    }
    console.log(whichMonths(Season.Fall));
  }
}
