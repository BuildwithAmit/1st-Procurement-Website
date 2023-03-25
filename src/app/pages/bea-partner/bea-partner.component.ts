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
  window.scrollTo(0,0);

}

scrollToSection() {
  $('html,body').animate({
    scrollTop: $("#form").offset().top},
    'slow');
}

faqData=[
  {
    id: 1,
    question: "How do I create a seller account ?",
    answer: "You will need to provide basic information about your company and products, as well as complete any necessary verification or documentation requirements."
  },
 
  {
    id: 3,
    question: "What information should I include in my product listings?",
    answer: "To create effective product listings, you should include detailed information about the raw materials you are selling, such as specifications, pricing, and delivery options. High-quality images can also be helpful in showcasing your products."
  },
  {
    id: 4,
    question: "How do I ensure the quality of my products?",
    answer: "To ensure the quality of your products, you should have a robust quality control process in place. This may involve testing raw materials before they are sold, as well as ongoing monitoring to ensure consistency in quality."
  },
   {
    id: 2,
    question: "What are the fees associated with selling?",
    answer: "No, charge fees to onboard and sell on our platform."
  },
  ];

  elements = [
    {
      name: 'Metals and Non metals',
      icon: '../../../assets/asserts/3dasserts/metals.png',
      content:  'Explore the distinct characteristics and diverse applications of metals and non-metals, two essential classes of elements with vastly different physical and chemical properties.',
    }, {
      name: 'Chemicals',
      icon: '../../../assets/asserts/3dasserts/chemicals.png',
      content: 'Discover the world of chemicals - substances with defined compositions and characteristic properties that are essential to the manufacturing, processing, and performance of countless products and applications.',
    }, {
      name: 'Polymers',
      icon: '../../../assets/asserts/3dasserts/polyemrs.png',
      content: 'materials composed of long chains of repeating units that exhibit unique mechanical, thermal, and chemical properties, and are used in a vast array of applications across industries.',
    }, {
      name: 'Composites',
      icon: '../../../assets/asserts/3dasserts/composites.png',
      content: 'Materials composed of 2+ distinct components that combine to create unique properties, and are used in a wide range of applications from construction and transportation to sports equipment and aerospace.',
    }, {
      name: 'Ceramics',
      icon: '../../../assets/asserts/3dasserts/ceramics.png',
      content: 'Discover ceramics - materials that are typically hard, brittle, and resistant to high temperatures and chemicals, and are used in a wide range of applications from pottery and construction to electronics and aerospace.',
    },
    {
      name: 'Natural Materials',
      icon: '../../../assets/asserts/3dasserts/ceramics.png',
      content: 'Discover the world of natural materials - substances that occur in nature and are used in a vast array of applications across industries, from traditional materials (wood, stone) to modern materials (silk, cellulose).',
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
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

}
