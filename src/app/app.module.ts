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


@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    CountVisitors,
    PlacesComponent,
    DetailsComponent,
    ForbidenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
