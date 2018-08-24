import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { PlacesService } from '../../providers/places.service';
import { AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';
import { Place } from '../../models/place';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [
    trigger('pushAnimate',[
      state('init', style({
        transform: 'scaleY(.5)'
      })),
      state('fin', style({
        transform: 'scaleY(1)'
      })),
      transition('init <=> fin',animate(100)),
    ])
  ]
})
export class DetailsComponent implements OnInit {

  id: string = null;
  place: Place = new Place();
  private placesCollection: AngularFirestoreCollection<Place>;
  starState = 'fin';
  constructor(private route: ActivatedRoute, private placesService: PlacesService, private router: Router, private toastr: ToastrService) {
    this.id = this.route.snapshot.queryParams['id'];
    this.placesCollection = placesService.getCollection();

    this.placesCollection.doc(this.id).valueChanges()
      .subscribe( (_: Place) => {
        this.place = _;
      });
  }


  spotlightPlace(){
    this.starState = 'init';
    this.place.favorite = !this.place.favorite;
    this.placesCollection.doc(this.id).update(this.place)
      .then( () => {
        this.starState = 'fin';
        this.toastr.success(`Se ha actualizado el estado`, 'Ok!');
      })
      .catch(err => {
      console.log('Error:',err);
        this.starState = 'fin';
        this.toastr.error('Ha ocurrido un error!','Error');
      });
  }

  ngOnInit() {

  }

}
