import { Component, NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleScrollSpyModule } from 'angular-simple-scroll-spy';
import { ServiceService } from '../services/service.service';
declare let Rellax:any;
declare let $: any
declare let AOS :any;
declare let Typed:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  constructor(private services:ServiceService){window.scrollTo(0,0);}

  ngOnInit(){
    const rellax = new Rellax('.rellax');
    $(document).ready(()=>{
      AOS.init();
    })
    window.scrollTo(0,0);

    var typed = new Typed('#element', {
      strings: ['Innovators ^3000', 'Researchers ^3000'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      backDelay: 700,
    });

  }
  currentMenuId = "menu1"

  post(){
    var data={
      "name":'shalil',
    }
    this.services.postEndpoint2(data).subscribe((res:any)=>{
      if(res.status === 200) {

      }
    })
  }


  offers_data = [
    {
      id: '1',
      for:'Matrial Selection',
      title: 'Don’t waste your time in reading literature, research papers and browsing the web to find out the raw material for your product.',
      content: 'Find best suitable raw material for your Product or process with the help of ProducTry.Let AI/ML handle the tasks.',
      img: '../../../assets/asserts/illustrator/matrial-selection.png'
    },
    {
      id: '2',
      for:'Matrial Procurement',
      title: 'Stuck in procuring raw Material for your research and speciality production.',
      content: 'Make data based procurement decisions and we will deliver the material at your doorstep.',
      img: '../../../assets/asserts/illustrator/purches.png'
    },
    {

      id: '3',
      for:'Dashboards and Analytics',
      title: 'What you can measure, you can improve.',
      content: 'Optimize your hardware Product development process with the help of ProducTry.Make data driven decisions with dashboards and data analytics.',
      img: '../../../assets/asserts/illustrator/dashboard.png'
    },

  ]



}
