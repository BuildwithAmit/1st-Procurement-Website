import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
declare let $: any
declare let AOS: any;
declare let Swal: any;

@Component({
  selector: 'app-find-rawmatrial',
  templateUrl: './find-rawmatrial.component.html',
  styleUrls: ['./find-rawmatrial.component.css']
})
export class FindRawmatrialComponent {

  constructor(public route: ActivatedRoute, private services: ServiceService) { window.scrollTo(0, 0) }
  ngOnInit(): void {
    $(document).ready(() => {
      AOS.init();
    })
    // *********************
    $(document).ready(() => {
      this.route.queryParams.subscribe(params => {
        let sectionId = params['section'];
        $('html, body').animate({
          scrollTop: sectionId ? $('#' + sectionId).offset().top : 0
        }, 1000);
      });
    });
  }
  scrollToSection() {
    $('html,body').animate({
      scrollTop: $("#form").offset().top
    },
      'slow');
  }

  faqData = [
    {
      id: 1,
      question: "What types of raw materials do you offer?",
      answer: "We offer a wide variety of raw materials, including metals, plastics, polymers, composites, ceramics, natural materials, textiles, chemicals, and more. Please let us know your specific needs and we can recommend the best options for you."
    },
    {
      id: 2,
      question: "How do I place an order for raw materials?",
      answer: "You can place an order for raw materials directly on our website. Simply select the materials you need, specify the quantity, and complete the checkout process."
    },
    {
      id: 3,
      question: "What is the lead time for delivery of raw materials?",
      answer: "The lead time for delivery of raw materials depends on the type of material and the quantity ordered. We will provide you with an estimated delivery date when you place your order."
    },
    {
      id: 4,
      question: "How do you ensure the quality of your raw materials?",
      answer: "We work with reputable suppliers and conduct regular quality control checks to ensure that our raw materials meet industry standards and our customers' needs."
    },
    {
      id: 5,
      question: "What is your customer service process?",
      answer: "We pride ourselves on providing excellent customer service. Our team is available to answer any questions you may have, and we will work with you to find a solution to any issues that may arise. You can contact us by phone, email, or through our website."
    },
    {
      id: 6,
      question: "What is your return policy for raw materials?",
      answer: "We understand that sometimes materials may need to be returned, and we have a clear and fair return policy in place. Please contact us if you need to return any materials, and we will work with you to find a solution."
    }
    ,
    {
      id: 7,
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes, we offer discounts for bulk orders. Please contact us for a quote."
    },
    {
      id: 8,
      question: "Can you provide technical specifications for the raw materials you offer",
      answer: "Yes, we can provide technical specifications for the raw materials we offer. Please let us know your specific needs and we can provide you with the necessary information."
    }
  ]




  elements = [
    {
      name: 'Metals and Non metals',
      icon: '../../../assets/asserts/3dasserts/metals.png',
      content: 'Explore the distinct characteristics and diverse applications of metals and non-metals, two essential classes of elements with vastly different physical and chemical properties.',
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
      icon: '../../../assets/asserts/3dasserts/natural.png',
      content: 'Discover the world of natural materials - substances that occur in nature and are used in a vast array of applications across industries, from traditional materials (wood, stone) to modern materials (silk, cellulose).',
    },
  ]


  clientLogo = [
    { logoUrl: '../../../assets/asserts/customers/customer1.jpeg' },
    { logoUrl: '../../../assets/asserts/customers/customer2.jpeg' },
    { logoUrl: '../../../assets/asserts/customers/customer3.jpeg' },
    { logoUrl: '../../../assets/asserts/customers/customer4.jpeg' },

  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayTimeout: 2000,
    autoplaySpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexName: any = /^[a-zA-Z ]*$/;
  regexPhoneNumber: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

  formError: boolean = false;

  nameError: any
  emailError: any
  phoneError: any
  materialdescriptionError: any
  materialrequirementError: any
  cityError: any
  termsError: any
  addressError: any
  materialselectError: any
  selected: boolean = false;

matrialSelected:any

selectMatrial(e:any){
  this.matrialSelected = e.target.value
  console.log(this.matrialSelected);

}

  sendRawMaterialInfo(e:any) {
    e.preventDefault();
    let material_description = $('#matrial-desc').val();
    let material_requirement = $('#matrial-requirement').val();
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phoneno').val();
    let city = $('#city').val();
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
    } else if (material_description == null || material_description == undefined || material_description == '') {
      $('#material_description').addClass('error-b');
      this.materialdescriptionError = 'Material desciption is required';
      this.materialselectError = '';
      this.formError = true;
    } else if (material_requirement == null || material_requirement == undefined || material_requirement == '') {
      $('#material_requirement').addClass('error-b');
      this.materialrequirementError = 'Please write your material requirements';
      this.materialdescriptionError = '';
      this.formError = true;
    } else if (name == null || name == undefined || name == '') {
      $('#material_requirement').removeClass('error-b');
      $('#name').addClass('error-b');
      this.formError = true;
      this.materialrequirementError = '';
      this.nameError = 'Name is required';
    } else if (!this.regexName.test(name)) {
      $('#name').addClass('error-b');
      this.nameError = 'please enter a valid name';
      this.formError = true;
    } else if (email == null || email == undefined || email == '') {
      $('#name').removeClass('error-b');
      this.nameError = '';
      $('#email').addClass('error-b');
      this.emailError = 'Email is required';
      this.formError = true;
    } else if (!this.regexEmail.test(email)) {
      $('#email').addClass('error-b');
      this.emailError = 'please enter a valid email address';
      this.formError = true;
    } else if (phone == null || phone == undefined || phone == '') {
      $('#email').removeClass('error-b');
      this.emailError = '';

      $('#phoneno').addClass('error-b');
      this.phoneError = 'phone is required';
      this.formError = true;
    } else if (!this.regexPhoneNumber.test(phone)) {
      $('#phoneno').addClass('error-b');
      this.phoneError = 'please enter a valid phone address';
      this.formError = true;
    } else if (city == null || city == undefined || city == '') {
      $('#phoneno').removeClass('error-b');
      this.phoneError = '';
      $('#city').addClass('error-b');
      this.cityError = 'city name is required';
      this.formError = true;
    } else if (address == null || address == undefined || address == '') {
      $('#city').removeClass('error-b');
      this.cityError = '';
      $('#address').addClass('error-b');
      this.addressError = 'Address is required';
      this.formError = true;
    } else if (!terms.is(':checked')) {
      $('#address').removeClass('error-b');
      this.addressError = '';
      $('#terms-conditions').addClass('error-b');
      this.termsError = 'please agree to terms & conditions/ privacy policy';
      this.formError = true;
    } else {
      $('#material_description').removeClass('error-b');
      $('#material_requirement').removeClass('error-b');
      $('#name').removeClass('error-b');
      $('#email').removeClass('error-b');
      $('#phoneno').removeClass('error-b');
      $('#city').removeClass('error-b');
      $('#adress').removeClass('error-b');
      $('#terms-conditions').removeClass('error-b');
      this.nameError = ''
      this.emailError = ""
      this.phoneError = ""
      this.materialselectError = ""
      this.materialdescriptionError = ""
      this.cityError = ""
      this.addressError = ""
      this.materialrequirementError = ""
      this.termsError = ""

      var data ={
        'name':name,
        'email':email,
        'phone_no':phone,
        'material':this.matrialSelected,
        'description':material_description,
        'requirement_details': material_requirement,
        'city':city,
        'address':address,
      }
      this.services.setReqRawMatrial(data).subscribe((res:any)=>{
        if (res.status === 200) {
          console.log(res);

          Swal.fire({
            title: res.message,
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result: any) => {
            if (result.isConfirmed) {
              // this.router.navigateByUrl('/beta')
              window.location.reload();
              $('#form')[0].reset()
            }
          })
        } else if (res.status == 400) {
          if (res.message.email[0] != '') {
            this.emailError = res.message.email[0];
            this.formError = true;
            $('#email').addClass('error-b');
          }
        }
      })



    }

  }

}
