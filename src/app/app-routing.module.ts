import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BeaPartnerComponent } from './pages/bea-partner/bea-partner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FindRawmatrialComponent } from './pages/find-rawmatrial/find-rawmatrial.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinBetaComponent } from './pages/join-beta/join-beta.component';
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component"
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component"


// third party librarys

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'partner',component:BeaPartnerComponent},
{path:'rawmatrial',component:FindRawmatrialComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'beta',component:JoinBetaComponent},
{path:'terms-and-conditions',component:TermsConditionsComponent},
{path:'privacy-policy',component:PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
