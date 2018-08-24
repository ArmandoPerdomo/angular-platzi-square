import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HightLightDirective } from './directives/highlight.directive';
import { CountVisitors } from './directives/count-visitors.directive';
import { PlacesComponent } from './modules/places/places.component';
import { DetailsComponent } from './modules/details/details.component';
import { ForbidenComponent } from './modules/forbiden/forbiden.component';
import { AppRoutes } from './constants/app-routes.constant';
import { PlacesService } from './providers/places.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconsDefinitions } from './constants/icons.constant';
import { AngularFireModule } from 'angularfire2';
import { FirebaseEnviroment } from './enviroments/firebase.enviroment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AddPlaceModalComponent } from './modules/add-place-modal/add-place-modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeletePlaceComponentComponent } from './modules/delete-place-component/delete-place-component.component';

library.add(IconsDefinitions);

@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    CountVisitors,
    PlacesComponent,
    DetailsComponent,
    ForbidenComponent,
    AddPlaceModalComponent,
    DeletePlaceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    FontAwesomeModule,
    AngularFireModule.initializeApp(FirebaseEnviroment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
