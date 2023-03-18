import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bea-partner',
  templateUrl: './bea-partner.component.html',
  styleUrls: ['./bea-partner.component.css']
})
export class BeaPartnerComponent {
  customOptions: OwlOptions = {
    loop: true,
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
        items: 2
      },
      740: {
        items: 3
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
      content:"We believe that every supplier should have the opportunity to reach new customers and grow their business, regardless of their size or budget. By eliminating registration and listing fees, we are able to provide our suppliers with a level playing field and encourage them to focus on what really matters - providing high quality raw materials"    
    },
    {
      id: "2",
      title:"Technology Enabled Platform",
      content:"Our cutting edge platform leverages the latest technology to provide a seamless, end to end solution for raw material procurement. <br/> We are dedicated to revolutionizing the way businesses source and manage their raw materials, making the process faster, easier and more cost effective than ever before."    
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
      content:"We pride ourselves on building strong relationships with our suppliers. We understand that trust is essential in any business partnership, which is why we only work with verified customers who share our commitment to quality and customer service. If you are interested in becoming a partner with us, we would love to hear from you. Please don't hesitate to reach out to our team today to learn more about the benefits of partnering with ProducTRY. We look forward to working with you!"    
    }
  ]

  // click() {

  // }
}
