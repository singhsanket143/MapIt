import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeMBlhaK2se5Bs3Ylk-UUFepgWgfPpMlY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
