import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivestreamComponent } from './pages/livestream/livestream.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'livestream', component: LivestreamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
