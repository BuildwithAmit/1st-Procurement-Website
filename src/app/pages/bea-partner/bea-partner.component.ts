import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
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
// ****************
$(document).ready(()=>{
  this.route.queryParams.subscribe(params => {
    let sectionId = params['section'];
    $('html, body').animate({
      scrollTop: sectionId ? $('#' + sectionId).offset().top : 0
    }, 1000);
  });
});
}

constructor(private route: ActivatedRoute, private services:ServiceService) {
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


  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexName: any = /^[a-zA-Z ]*$/;
  regexPhoneNumber: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
  regexGstNumber: any = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  regxWebURL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  formError:boolean = false;

  nameError:any
  emailError:any
  phoneError:any
  companynameError:any
  cityError:any
  addressError: any
  materialselectError:any
  gstError:any
  weburlError:any
  uploadError:any
  termsError:any
  selected: boolean = false;

matrailSelectedvalue:any
uploadedFIle:any
matrialSelected(data:any){
  this.matrailSelectedvalue = data
}

uploadedFile(e:any){
  var data = e.target.files[0]
  var name = data.name
  const formData = new FormData();
  // this.uploadedFIle = formData.append('image', data,name);
  this.uploadedFIle = data
}


  sendPartnerInfo(){
  let company_name = $('#companyname').val();
  let name = $('#name').val();
  let email = $('#email').val();
  let phone = $('#phoneno').val();
  let city = $('#city').val();
  let gstno = $('#gstno').val();
  let weburl = $('#weburl').val();
  let upload = $('#dropzone-file').val();
  let address = $('#address').val();
  let terms = $('#terms-conditions');



      this.elements.forEach(element => {
        let material_select = document.getElementById("select-" + element.name) as HTMLInputElement;
        if (material_select.checked == true) {
          this.selected = true
        }
      });

    if (!this.selected) {
         this.materialselectError = 'Please select material';
          this.formError = true;
    }else if(name == null || name == undefined || name == ''){

    $('#name').addClass('error-b');
   this.formError = true;
   this.companynameError = '';
    this.nameError = 'Name is required';
  }else if(!this.regexName.test(name)){
    $('#name').addClass('error-b');
    this.nameError = 'please enter a valid name';
    this.formError = true;
  }else if(email == null || email == undefined || email == ''){
    $('#name').removeClass('error-b');
    this.nameError = '';
    $('#email').addClass('error-b');
    this.emailError = 'Email is required';
    this.formError = true;
  }else if(!this.regexEmail.test(email)){
    $('#email').addClass('error-b');
    this.emailError = 'please enter a valid email address';
    this.formError = true;
  }else if(phone == null || phone == undefined || phone == ''){
    $('#email').removeClass('error-b');
    this.emailError = '';

    $('#phoneno').addClass('error-b');
    this.phoneError = 'phone is required';
    this.formError = true;
  }else if(!this.regexPhoneNumber.test(phone)){
    $('#phoneno').addClass('error-b');
    this.phoneError = 'please enter a valid phone address';
    this.formError = true;
  }else if(city == null || city == undefined || city == ''){
    $('#phoneno').removeClass('error-b');
    this.phoneError = '';
    $('#city').addClass('error-b');
    this.cityError = 'City name is required';
    this.formError = true;
    } else if (company_name == null || company_name == undefined || company_name == '') {
      $('#city').removeClass('error-b');
    $('#companyname').addClass('error-b');
   this.companynameError = 'Company name is required';
   this.cityError = '';
    this.formError = true;
  }else if(address == null || address == undefined || address == ''){
    $('#companyname').removeClass('error-b');
    this.cityError = '';
    $('#address').addClass('error-b');
    this.addressError = 'Address is required';
    this.formError = true;
    }else if(gstno == null || gstno == undefined || gstno == ''){
    $('#address').removeClass('error-b');
    this.cityError = '';
    $('#gstno').addClass('error-b');
    this.gstError = 'GST number is required';
    this.formError = true;
    }else if(!this.regexGstNumber.test(gstno)){
    $('#gstno').addClass('error-b');
    this.gstError = 'Please enter valid GST number';
    this.formError = true;
    }else if(weburl == null || weburl == undefined || weburl == ''){
    $('#gstno').removeClass('error-b');
    this.cityError = '';
    $('#weburl').addClass('error-b');
    this.weburlError = 'website url is required';
    this.formError = true;
    }else if(!this.regxWebURL.test(weburl)){
    $('#weburl').addClass('error-b');
    this.weburlError = 'please provid valid url';
    this.formError = true;
  } else if(upload == null || upload == undefined || upload == ''){
    $('#weburl').removeClass('error-b');
    this.cityError = '';
      $('#upload').addClass('error-b');
    this.uploadError = 'please upload required document';
    this.formError = true;
    }else if(!terms.is(':checked')){
    $('#upload').removeClass('error-b');
    this.uploadError = '';
    $('#terms-conditions').addClass('error-b');
    this.termsError = 'please agree to terms & conditions/ privacy policy';
    this.formError = true;
    } else {
       $('#name').removeClass('error-b');
      $('#phoneno').removeClass('error-b');
      $('#city').removeClass('error-b');
       $('#companyname').removeClass('error-b');
        $('#address').removeClass('error-b');
       $('#gstno').removeClass('error-b');
       $('#weburl').removeClass('error-b');
       $('#terms-conditions').removeClass('error-b');
      $('#upload').removeClass('error-b');
      this.nameError = ''
      this.emailError = ""
      this.phoneError = ""
      this.materialselectError = ""
      this.companynameError = ""
      this.cityError = ""
      this.addressError = ""
      this.gstError = ""
      this.uploadError = ""
      this.termsError = ""

      var data ={
        'name':name,
        'email':email,
        'phone_no':phone,
        'city':city,
        'material':this.matrailSelectedvalue,
        'company_name':company_name,
        'company_gst':gstno,
        'website_url':weburl,
        'address':address,
        'card':this.uploadedFIle,
      }
      this.services.setReqPartner(data).subscribe((res:any)=>{

      })

    }

}
}
