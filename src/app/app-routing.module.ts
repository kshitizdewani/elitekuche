import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeSpaceComponent} from './components/home-space/home-space.component';
import {DesignersDeskComponent} from './components/designers-desk/designers-desk.component';
import {ShowcaseComponent} from './components/showcase/showcase.component';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'home-space', component:  HomeSpaceComponent},
  { path: 'designers-desk', component: DesignersDeskComponent},
  { path: 'showcase', component: ShowcaseComponent},
  {path:  'contact',  component: ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
