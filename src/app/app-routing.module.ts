import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivestreamComponent } from './pages/livestream/livestream.component';
import { BpMvComponent } from './pages/livestream/bp-mv/bp-mv.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'livestream', component: LivestreamComponent },
   { path: 'blackpinkstat', component: BpMvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
