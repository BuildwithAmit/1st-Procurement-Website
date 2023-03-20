import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleScrollSpyModule } from 'angular-simple-scroll-spy';
declare let Rellax:any;
declare let $: any



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {


  constructor(){window.scrollTo(0,0)}

  ngOnInit(){
    const rellax = new Rellax('.rellax');
  }
  currentMenuId = "menu1";

  offers_data = [
    {
      id: '1',
      for:'',
      title: 'Don’t waste your time in reading literature, research papers and browsing the web to find out the raw material for your product.',
      content: 'Find best suitable raw material for your Product or process with the help of ProducTry.Let AI/ML handle the tasks.',
      img: 'https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
    },
    {
      id: '2',
      for:'',
      title: 'Stuck in procuring raw Material for your research and speciality production.',
      content: 'Make data based procurement decisions and we will deliver the material at your doorstep.',
      img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1225&q=80'
    },
    {

      id: '3',
      for:'',
      title: 'What you can measure, you can improve.',
      content: 'Optimize your hardware Product development process with the help of ProducTry.Make data driven decisions with dashboards and data analytics.',
      img: 'https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },

  ]


}
