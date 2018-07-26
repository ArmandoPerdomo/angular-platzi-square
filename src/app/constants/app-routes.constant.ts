import {Routes, RouterModule} from '@angular/router';
import { PlacesComponent } from '../modules/places/places.component';
import { DetailsComponent } from '../modules/details/details.component';
import { ForbidenComponent } from '../modules/forbiden/forbiden.component';

const APP_ROUTES: Routes = [
    {path: '', component: PlacesComponent},
    {path:'places', component:PlacesComponent},
    {path: 'details', component: DetailsComponent}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES); 
