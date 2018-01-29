// Module imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component imports
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
