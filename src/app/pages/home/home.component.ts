import { Component, NgModule, ViewChild, ElementRef, AfterViewInit,Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleScrollSpyModule } from 'angular-simple-scroll-spy';
import { Directive, HostListener } from '@angular/core';
// import { ServiceService } from '../services/service.service';
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
  constructor(private elementRef: ElementRef){window.scrollTo(0,0);}

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
    $(document).ready(()=>{
    });
  }
  // currentMenuId = "menu1"

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (this.isElementInViewport(section)) {
        const id = section.getAttribute('id');
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach((navLink) => {
          navLink.classList.remove('active');
          if (navLink.getAttribute('href') === '#' + id) {
            navLink.classList.add('active');
          }
        });
      }
    });
  }

  isElementInViewport(element:any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  offers_data = [
    {
      id: '1',
      for:'Material Selection',
      title: 'Don’t waste your time in reading literature, research papers and browsing the web to find out the raw material for your product.',
      content: 'Find best suitable raw material for your Product or process with the help of ProducTry.',
      img: '../../../assets/asserts/illustrator/matrial-selection.png'
    },
    {
      id: '2',
      for:'Material Procurement',
      title: 'Stuck in procuring raw Material for your research and speciality production.',
      content: 'Make data based procurement decisions and we will deliver the material at your doorstep.',
      img: '../../../assets/asserts/illustrator/purches.png'
    },
    {

      id: '3',
      for:'Dashboards and Analytics',
      title: 'What you can measure, you can improve.',
      content: `Optimize your hardware Product development process with the help of ProducTry. Make data driven decisions with the help of Dashboards and Analytics.`,
      img: '../../../assets/asserts/illustrator/dashboard.png'
    },

  ]


  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  formError: boolean = false;
  emailError: any;
  sendNewsletterInfo() {
    let email = $('#email').val();
    if(email == null || email == undefined || email == ''){
    $('#email').addClass('error-b');
    this.emailError = 'Email is required';
    this.formError = true;
  }else if(!this.regexEmail.test(email)){
    $('#email').addClass('error-b');
    this.emailError = 'please enter a valid email address';
    this.formError = true;
    } else {
      $('#email').removeClass('error-b');
       this.emailError=''
      alert('done')
  }
  }

}
