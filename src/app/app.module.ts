import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { DinamicoUfficioComponent } from './components/partials/dinamico-ufficio/dinamico-ufficio.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    FoodPageComponent,
    DinamicoUfficioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
