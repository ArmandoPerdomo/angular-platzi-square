import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HightLightDirective } from './directives/highlight.directive';
import { CountVisitors } from './directives/count-visitors.directive';


@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    CountVisitors
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
