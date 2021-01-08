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
import { WardrobeComponent } from './components/wardrobe/wardrobe.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSpaceComponent,
    DesignersDeskComponent,
    ShowcaseComponent,
    ContactComponent,
    PageNotFoundComponent,
    KitchenComponent,
    WardrobeComponent,
    FooterComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
