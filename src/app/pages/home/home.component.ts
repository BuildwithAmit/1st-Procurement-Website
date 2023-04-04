import { Component, NgModule, ViewChild, ElementRef, AfterViewInit,Input, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleScrollSpyModule } from 'angular-simple-scroll-spy';
import { Directive, HostListener } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare let Rellax:any;
declare let $: any
declare let AOS :any;
declare let Typed:any;
declare let Swal:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  constructor(private elementRef: ElementRef,private service:ServiceService){window.scrollTo(0,0);}

loader:string = `<div role="status">
<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only">Loading...</span>
</div>`

  ngOnInit(){

    $('.pre-loader').fadeIn();
    $(document).ready(function() {
      $('.pre-loader').fadeIn();
      setTimeout(function() {
        $('.pre-loader').fadeOut();
      }, 2000);
    });

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

  supporters_data = [
    {
      id: "1",
      img: "../../../assets/asserts/ourSupporters/IIITH.png",
      alt:"StartupIndia-logo"
    },
    {
      id: "2",
      img: "../../../assets/asserts/ourSupporters/CIE.png",
      alt:"MSME-logo"
    },
    {
      id: "3",
      img: "../../../assets/asserts/ourSupporters/MEIT.svg",
      alt:"MEIT-logo"
    },
    {
      id: "4",
      img: "../../../assets/asserts/ourSupporters/StartupIndia.svg",
      alt:"iithydrabad"
    },
    {
      id: "5",
      img: "../../../assets/asserts/ourSupporters/MSME.png",
      alt:"iithydrabad"
    },
  ]

  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  formError: boolean = false;
  emailError: any;
  buttonText: any = "Send";
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
       this.buttonText = "Sending"
      $('#email').removeClass('error-b');
       this.emailError=''
      var data={
        'email': email
      }
      this.service.setSubscribed(data).subscribe((res:any)=>{
        if(res.status === 200){
          this.buttonText = "Send";
          Swal.fire({
            title: "Thank you for subscribing to our newsletter email.",
            icon: 'success',
            confirmButtonText: 'OK',
          }
          )
        } else if (res.status == 400) {
          this.buttonText = "Send";
          this.formError = true
          this.emailError = res.message.email[0]
        }


      })
  }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayTimeout:1000,
    autoplaySpeed:700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
        center:true
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      1024:{
        items:5
      }
    },
    nav: false
  }

}