import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { LiniiComponent } from './linii/linii.component';
import { LinijaDetailsComponent } from './linija-details/linija-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { StaniciComponent } from './stanici/stanici.component';
import { StanicaDetailsComponent } from './stanica-details/stanica-details.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LiniiComponent,
    LinijaDetailsComponent,
    StaniciComponent,
    StanicaDetailsComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    Ng2SearchPipeModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
