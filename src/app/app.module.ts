import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from '../carousel/carousel.component';
import { LogoComponent } from '../logo/logo.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LogoComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
