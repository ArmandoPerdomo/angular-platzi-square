import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  places: any = [
    {id: 1, plan: 'free', closeness: 1, distance: 0.50, name: 'Barsoke' , visits: 0},
    {id: 2, plan: 'premiun', closeness: 2, distance: 4.50, name: 'Arkiteck' , visits: 0},
    {id: 3, plan: 'free', closeness: 1, distance: 1, name: 'Panadería la Alianza' , visits: 0},
    {id: 4, plan: 'premiun', closeness: 3, distance: 8.50, name: 'Los Girasoles' , visits: 0},
    {id: 5, plan: 'premiun', closeness: 3, distance: 8, name: 'La Hacienda' , visits: 0},
    {id: 6, plan: 'free', closeness: 1, distance: 0.50, name: 'La Venus' , visits: 0},
    {id: 7, plan: 'free', closeness: 3, distance: 12, name: 'Maro\'s Café' , visits: 0},
    {id: 8, plan: 'free', closeness: 2, distance: 6.50, name: 'El Paso' , visits: 0}
  ];

  id = null;
  place = {};
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParams['id'];
  }

  ngOnInit() {

  }

}
