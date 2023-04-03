import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
declare let $:any;
declare let Swal:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

constructor(private service:ServiceService){}

  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexName: any = /^[a-zA-Z ]*$/;
  regexPhoneNumber: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

  formError:boolean = false;

  nameError:any
  emailError:any
  phoneError:any
  messageError:any
  companynameError: any
  buttonText:any = "Submit"

ngOnInit(): void{
  $(document).ready(()=>{

    window.scrollTo(0,0);
  })

}
sendContactInfo(e:any){
  e.preventDefault();
  let name = $('#name').val();
  let email = $('#email').val();
  let phone = $('#phoneno').val();
  let message = $('#message').val();
  let company_name = $('#companyname').val();

  if(name == null || name == undefined || name == ''){
    $('#name').addClass('error-b');
    this.formError = true;
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
  }else if(company_name == null || company_name == undefined || company_name == ''){
    $('#phoneno').removeClass('error-b');
    this.phoneError = '';
    $('#companyname').addClass('error-b');
    this.companynameError = 'company name is required';
    this.formError = true;
  } else if(message == null || message == undefined || message == ''){
    $('#companyname').removeClass('error-b');
    this.companynameError = '';

    $('#message').addClass('error-b');
    this.messageError = 'message is required';
    this.formError = true;
  } else {
    this.buttonText = "Submit..."
    this.formError = false
    this.nameError = ''
    this.phoneError = ''
    this.emailError = ''
    this.messageError = ''
    this.companynameError = ''
    $('#name').removeClass('error-b');
    $('#email').removeClass('error-b');
    $('#phoneno').removeClass('error-b');
    $('#companyname').removeClass('error-b');
    $('#message').removeClass('error-b');

    var data = {
      'name': name ,
      'email': email,
      'phone_no':phone,
      'company_name':company_name,
      'message':message,
    }
    this.service.contactUs(data).subscribe((res:any)=>{
      if (res.status === 200) {
        // console.log(res);
        this.buttonText = "Submit"
        Swal.fire({
          title: res.message,
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result: any) => {
          if (result.isConfirmed) {
            $('#form')[0].reset()
          }
        })
      } else if (res.status == 400) {
        this.buttonText = "Submit"
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
