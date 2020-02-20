import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherDisplayComponent } from './current-weather-display/current-weather-display.component';
import { GetAPIdataService } from './get-apidata.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: GetAPIdataService, useClass: GetAPIdataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
