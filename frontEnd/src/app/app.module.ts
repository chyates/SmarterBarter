// Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component imports
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Service imports
import { LocalApiService } from './local-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
