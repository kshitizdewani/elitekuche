import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSpaceComponent } from './components/home-space/home-space.component';
import { DesignersDeskComponent } from './components/designers-desk/designers-desk.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSpaceComponent,
    DesignersDeskComponent,
    ShowcaseComponent,
    ContactComponent,
    PageNotFoundComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
