import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FormsModule }   from '@angular/forms';
//third party libraries
import {SimpleScrollSpyModule} from "angular-simple-scroll-spy";
import { FAQComponent } from './components/faq/faq.component';
import { TeamCarouselComponent } from './components/team-carousel/team-carousel.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    FAQComponent,
    TeamCarouselComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,

  ],
  imports: [
    SimpleScrollSpyModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule ,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
