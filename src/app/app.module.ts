import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './screens/home/home.component';
import { FavNewsComponent } from './components/fav-news/fav-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpService } from './core/services/http.service';
import { NewsProviderService } from './core/providers/news-provider.service';
import { HttpClientModule } from '@angular/common/http';

const Services = [
  HttpService,
  NewsProviderService
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavNewsComponent,
    AllNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [...Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
