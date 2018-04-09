import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RandomComponent } from './random/random.component';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    CountdownComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ CountdownComponent,RandomComponent ]
})
export class AppModule { }
