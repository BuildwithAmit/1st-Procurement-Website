import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-join-beta',
  templateUrl: './join-beta.component.html',
  styleUrls: ['./join-beta.component.css']
})
export class JoinBetaComponent {

   regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexName: any = /^[a-zA-Z ]*$/;
  regexPhoneNumber: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

  formError:boolean = false;

  nameError:any
  emailError:any
  phoneError:any
  sectorError:any
  companynameError:any
  organizationError:any
  professionError:any

ngOnInit():void {
  window.scrollTo(0,0);
  }

sendBetaInfo(){
  let name = $('#name').val();
  let company_name = $('#companyname').val();
  let email = $('#email').val();
  let phone = $('#phoneno').val();
  let sector = $('#sector').val();
  let organization = $('#organization').val();
  let profession = $('#profession').val();

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
  }else if(sector == null || sector == undefined || sector == ''){
    $('#phoneno').removeClass('error-b');
    this.phoneError = '';

    $('#sector').addClass('error-b');
    this.sectorError = 'sector is required';
    this.formError = true;
  }else if(company_name == null || company_name == undefined || company_name == ''){
    $('#sector').removeClass('error-b');
    this.sectorError = '';
    $('#companyname').addClass('error-b');
    this.companynameError = 'company name is required';
    this.formError = true;
  }else if(organization == null || organization == undefined || organization == ''){
    $('#companyname').removeClass('error-b');
    this.companynameError = '';
    $('#organization').addClass('error-b');
    this.organizationError = 'organization is required';
    this.formError = true;
  }else if(profession == null || profession == undefined || profession == ''){
    $('#organization').removeClass('error-b');
    this.organizationError = '';
    $('#profession').addClass('error-b');
    this.professionError = 'profession is required';
    this.formError = true;
  }else{alert('done')}

}
}
