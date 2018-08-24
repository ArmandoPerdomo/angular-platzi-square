import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/place';
import { MouseEvent } from '@agm/core';
import { PlacesService } from '../../providers/places.service';
import { AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-place-modal',
  templateUrl: './add-place-modal.component.html',
  styleUrls: ['./add-place-modal.component.css']
})
export class AddPlaceModalComponent implements OnInit {


  @Input() place: Place;

  zoom = 1;
  marker: marker = {
    lat: 1,
    lng: 1,
    label: '',
    draggable: true
  };

  placeCollection: AngularFirestoreCollection<Place>;
  constructor(private ps: PlacesService, private toastr: ToastrService) { 
    this.placeCollection = this.ps.getCollection();
  }
  ngOnInit() {

    if(!this.place){
      this.place = new Place();
    }else{
      this.marker.lat = this.place.lat;
      this.marker.lng = this.place.lng;
      this.zoom = 12;
    }
  }

  mapClicked($event: MouseEvent) {
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
  }

  save(){
    let place: Place = this.place;
    place.lng = this.marker.lng;
    place.lat = this.marker.lat;

    if(!place.id){
      place.id = Date.now();
    }

    if(place.name === ''){
      this.toastr.info('Almenos un nombre', 'Info');
      return;
    }

    if(place.lat === 1 || place.lng === 1){
      this.toastr.info('Debe seleccionar una localización', 'Info');
      return;
    }

    this.placeCollection.doc(place.id.toString()).set(Object.assign({},place))
      .then( () => {
        this.toastr.success(`Se ha guardado el lugar ${place.name} con éxito `, 'Ok!');
      })
      .catch(err => {
        console.log('Error:',err);
        this.toastr.error('Ha ocurrido un error!','Error');
      });
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
