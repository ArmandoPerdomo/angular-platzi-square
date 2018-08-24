import { Directive, HostListener, Input } from "../../../node_modules/@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { PlacesService } from "../providers/places.service";
import { AngularFirestoreCollection } from "../../../node_modules/angularfire2/firestore";
import { Place } from "../models/place";

@Directive({
    selector: 'li[count-visitors]'
})
export class CountVisitors{

    placesCollection: AngularFirestoreCollection<Place>
    constructor(private _router: Router, private placesService: PlacesService){
        this.placesCollection = this.placesService.getCollection();
    }

    @Input('count-visitors') place : Place;
    @HostListener('click', ['$event.target']) countVisits() {
        this.place.visits++;
        this.placesCollection.doc(this.place.id.toString()).update(this.place);
        this._router.navigate(['/details'],{ queryParams: { id: this.place.id } });
        console.log('Numero de visitas', this.place.visits);
    }
}
