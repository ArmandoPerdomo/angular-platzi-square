import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/place';
import { AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';
import { PlacesService } from '../../providers/places.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-delete-place-component',
  templateUrl: './delete-place-component.component.html',
  styleUrls: ['./delete-place-component.component.css']
})
export class DeletePlaceComponentComponent implements OnInit {


  @Input() place: Place;
  placeCollection: AngularFirestoreCollection<Place>;

  constructor(private ps: PlacesService, private toastr: ToastrService, private router: Router) {
    this.placeCollection = this.ps.getCollection();
  }

  ngOnInit() {
  }

  delete(){
    this.placeCollection.doc(this.place.id.toString()).delete()
      .then(()=>{
        this.toastr.success(`Se ha eliminado el lugar exitosamente`, "OK");
        this.router.navigate(['/places']);
      })
      .catch((ex)=>{
        console.log(ex);
        this.toastr.error("Ha ocurrido un error","ERR");
      });
  }

}
