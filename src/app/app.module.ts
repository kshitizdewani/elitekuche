import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSpaceComponent } from './components/home-space/home-space.component';
import { DesignersDeskComponent } from './components/designers-desk/designers-desk.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSpaceComponent,
    DesignersDeskComponent,
    ShowcaseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
