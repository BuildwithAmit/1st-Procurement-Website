import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FindRawmatrialComponent } from './pages/find-rawmatrial/find-rawmatrial.component';
import { BeaPartnerComponent } from './pages/bea-partner/bea-partner.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JoinBetaComponent } from './pages/join-beta/join-beta.component';
import { PartnershipCardComponent } from './components/partnership-card/partnership-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FindRawmatrialComponent,
    BeaPartnerComponent,
    AboutComponent,
    ContactComponent,
    JoinBetaComponent,
    PartnershipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
