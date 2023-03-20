import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BeaPartnerComponent } from './pages/bea-partner/bea-partner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FindRawmatrialComponent } from './pages/find-rawmatrial/find-rawmatrial.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinBetaComponent } from './pages/join-beta/join-beta.component';



// third party librarys

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'be-a-partner',component:BeaPartnerComponent},
{path:'find-a-rawmatrial',component:FindRawmatrialComponent},
{path:'about-us',component:AboutComponent},
{path:'contact-us',component:ContactComponent},
{path:'join-beta',component:JoinBetaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
