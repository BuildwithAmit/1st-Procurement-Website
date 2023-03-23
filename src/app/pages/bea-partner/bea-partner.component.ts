import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $:any;
declare let AOS :any;


@Component({
  selector: 'app-bea-partner',
  templateUrl: './bea-partner.component.html',
  styleUrls: ['./bea-partner.component.css']
})
export class BeaPartnerComponent {
ngOnInit(): void{
  $(document).ready(()=>{
    AOS.init();
  })
}

scrollToSection() {
  $('html,body').animate({
    scrollTop: $("#form").offset().top},
    'slow');
}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      768: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  data = [
    {
      id: "1",
      title:"No Registration or Product listing Charges",
      content:"By eliminating registration and listing fees, we are able to provide our suppliers opportunity to reach new customers and grow their business with a level playing field and encourage them to focus on what really matters - providing high quality raw materials."    
    },
    {
      id: "2",
      title:"Technology Enabled Platform",
      content:"We are dedicated to revolutionizing the way businesses source and manage their raw materials, making the process faster, easier and more cost effective than ever before."    
      
    },
    {
      id: "3",
      title:"Increased Exposure",
      content:"With our expansive network of clients, you will gain exposure to a wider customer base, allowing you to reach new markets and increase your business visibility."
    },
    {
      id: "4",
      title:"Upfront Payments",
      content:"We prioritize timely and transparent payments to our suppliers, ensuring that you are fairly compensated for your raw materials."
    }
    ,{
      id: "5",
      title:"Access to Expertise",
      content:"Our team of experienced professionals provides extensive support to our suppliers, ensuring that you have the resources and expertise you need to succeed."
    },
    {
      id: "6",
      title:"Large and verified base of Customers",
      content:"We pride ourselves on building strong relationships with our suppliers. We understand that trust is essential in any business partnership, which is why we only work with verified customers who share our commitment to quality and customer service."    
      
    }
  ]


  // click() {

  // }
}
