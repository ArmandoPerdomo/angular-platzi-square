import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../providers/places.service';
import { Place } from '../../models/place';
import { AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  private placesCollection: AngularFirestoreCollection<Place>;
  places: Place[] = [];
  

  constructor(private placesService: PlacesService) {
    this.placesCollection = this.placesService.getCollection();
    this.placesCollection.valueChanges()
      .subscribe((_) => {
        this.places = _;
      })
  }

  favoritePlacesAviable(){
    let favPlaces = [];

    if(this.places){
      this.places.forEach((el)=> {
        if(el.favorite){
          favPlaces.push(el);
        }
      });
    }

    return favPlaces.length;
  }

  ngOnInit() {
  }

}
