import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { LivestreamComponent } from './pages/livestream/livestream.component';
import { DataService } from './services/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BpMvComponent } from './pages/livestream/bp-mv/bp-mv.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    LivestreamComponent,
    BpMvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
     DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
