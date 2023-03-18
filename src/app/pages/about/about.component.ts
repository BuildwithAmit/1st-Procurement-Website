import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
core_value_data = [
  {
      id:1,
      title:"Core Value 1",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."    
    },
  {
      id:2,
      title:"Core Value 2",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."    
    },
  {
      id:3,
      title:"Core Value 3",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."    
    }
  ]
   team_data = [
    {
      id: '1',
      name: "Amit Jadhwar",
      designation: 'founder',
      img: "../../../assets/asserts/team/man-1.png"
    },
    {
      id: '1',
      name: "Sadanand Gore",
      designation: 'marketing',
      img: "../../../assets/asserts/team/man-2.png"
    },
    {
      id: '1',
      name: "Shalil Jaiswar",
      designation: 'developer',
      img: "../../../assets/asserts/team/man-3.png"
    },
    {
      id: '1',
      name: "Juned",
      designation: 'developer',
      img: "../../../assets/asserts/team/man-1.png"
    },
    {
      id: '1',
      name: "Rushikesh Aher",
      designation: 'developer',
      img: "../../../assets/asserts/team/man-2.png"
    },
    
  ]
   mentors_data = [
    {
      id: '1',
      name: "Amit Jadhwar",
      designation: 'founder',
      img: "../../../assets/asserts/team/man-1.png"
    }
    
  ]

  supporters_data = [
    {
      id: "1",
      img: "../../../assets/asserts/ourSupporters/StartupIndia.svg",
      alt:"StartupIndia-logo"
    },
    {
      id: "2",
      img: "../../../assets/asserts/ourSupporters/MSME.jpeg",
      alt:"MSME-logo"
    },
    {
      id: "3",
      img: "../../../assets/asserts/ourSupporters/MEIT.svg",
      alt:"MEIT-logo"
    },
    {
      id: "4",
      img: "../../../assets/asserts/ourSupporters/iithydrabad.png",
      alt:"iithydrabad"
    },
  ]

  showTeam: boolean = true
  showMentors: boolean = false
  
  showTeamData() {
    this.showTeam = true
    this.showMentors = false
  }
  showMentorsData() {
    this.showTeam = false
    this.showMentors = true
  }
}
