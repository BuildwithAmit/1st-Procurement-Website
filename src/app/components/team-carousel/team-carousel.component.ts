import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $ :any
@Component({
  selector: 'app-team-carousel',
  templateUrl: './team-carousel.component.html',
  styleUrls: ['./team-carousel.component.css']
})
export class TeamCarouselComponent {



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoplaySpeed:800,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

teamData=[
  {
    id:'1',
    name:'Amit J',
    designation: 'Founder',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'2',
    name:'Juned',
    designation: 'Developer',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'3',
    name:'sadanand',
    designation: 'operational',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'4',
    name:'SHAlil',
    designation: 'developer',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'5',
    name:'rushikesh',
    designation: 'developer',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
]

mentorData=[
  {
    id:'1',
    name:'Amit J',
    designation: 'abc',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'2',
    name:'Juned',
    designation: 'def',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id:'3',
    name:'sadanand',
    designation: 'ghi',
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
]

showTeam:boolean = true

showTeamData(){
  $('.show-team-btn').addClass('active')
  $('.show-mentors-btn').removeClass('active')
  this.showTeam=true;
}
showMentorsData(){
  $('.show-team-btn').removeClass('active')
  $('.show-mentors-btn').addClass('active')
  this.showTeam=false;
}



}
