import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import pages
import { PrincipalComponent } from '../app/pages/principal/principal.component';
import { AboutComponent } from '../app/pages/about/about.component';

const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
