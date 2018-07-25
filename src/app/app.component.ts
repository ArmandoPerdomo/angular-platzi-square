import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any = [
    {plan: 'free', closeness: 1, distance: 0.50, name: 'Barsoke' , visits: 0},
    {plan: 'premiun', closeness: 2, distance: 4.50, name: 'Arkiteck' , visits: 0},
    {plan: 'free', closeness: 1, distance: 1, name: 'Panadería la Alianza' , visits: 0},
    {plan: 'premiun', closeness: 3, distance: 8.50, name: 'Los Girasoles' , visits: 0},
    {plan: 'premiun', closeness: 3, distance: 8, name: 'La Hacienda' , visits: 0},
    {plan: 'free', closeness: 1, distance: 0.50, name: 'La Venus' , visits: 0},
    {plan: 'free', closeness: 3, distance: 12, name: 'Maro\'s Café' , visits: 0},
    {plan: 'free', closeness: 2, distance: 6.50, name: 'El Paso' , visits: 0}
  ];

  lat = 10.0460348;
  lng = -69.2599428;
}
