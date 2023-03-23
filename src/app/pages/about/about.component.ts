import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
core_value_data = [
  {
      id:1,
      title:"Collaboration",
      content:"Teamwork and cooperation are essential for achieving goals and delivering the best possible results.<br/> We encourage open communication, active listening, and a willingness to share ideas, feedback, and insights. By working together, we can achieve more than we ever could alone."    
    },
  {
      id:2,
      title:"Continuous Improvement",
      content:"There is always room for growth and that we can always do better. We encourage our team members to think critically, ask questions, and challenge the status quo."    
    },
  {
      id:3,
      title:"Curiosity",
      content:"Desire to learn and explore is essential for personal and professional growth. We encourage our team members to stay curious, to seek out new experiences, and to never stop asking questions."    
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
    },
    {
      id: '1',
      name: "Sadanand Gore",
      designation: 'marketing',
      img: "../../../assets/asserts/team/man-2.png"
    },
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
    document.getElementsByClassName("tab-links")[0].classList.add('active');
    document.getElementsByClassName("tab-links")[1].classList.remove('active');
  }
  showMentorsData() {
    this.showMentors = true
    this.showTeam = false
    document.getElementsByClassName("tab-links")[0].classList.remove('active');
    document.getElementsByClassName("tab-links")[1].classList.add('active');
  }

}
