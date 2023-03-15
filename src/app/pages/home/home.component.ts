import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare let $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  btn(){
    $('#toggle').hide()
  }

}
