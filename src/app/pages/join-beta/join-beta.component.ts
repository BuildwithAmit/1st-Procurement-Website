import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-join-beta',
  templateUrl: './join-beta.component.html',
  styleUrls: ['./join-beta.component.css']
})
export class JoinBetaComponent {
ngOnInit():void {
  window.scrollTo(0,0);
  }

  validateEmail(inputEmail:string):boolean {
    const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(inputEmail);
    console.log('e-mail is ' + (result ? 'correct' : 'incorrect'));
    return result;
  }
  validatePhone(inputNumber:string):boolean {
    var expression: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const result: boolean = expression.test(inputNumber);
     console.log('phone is ' + (result ? 'correct' : 'incorrect'));
    return result;
  }
  
  submitForm(event:any) {
    event.preventDefault();
   var name = $('#name').val();
    var companyname = $('#companyname').val();
    var email = $('#email').val();
    var sector = $('#sector').val();
    var phoneno = $('#phoneno').val();
    var organization = $('#organization').val();
    var profession = $('#profession').val();
    if (email && phoneno) {
      if (!this.validateEmail(email)) {
        alert("please enter correct email");
      }
      if (!this.validatePhone(phoneno)) {
        alert("please enter correct phone number");
      }
    }
 }

//   validateForm() {
//     var name = $('#name').val();
//     var companyname = $('#companyname').val();
//     var email = $('#email').val();
//     var sector = $('#sector').val();
//     var phoneno = $('#phoneno').val();
//     var organization = $('#organization').val();
//     var profession = $('#profession').val();
//     console.log(this.validateEmail(email));
//     console.log(this.validatePhone(phoneno));
//     console.log(organization);
//     if (!name) {
//       $('#name').addClass('input-error');
//     } else if (!companyname) {
//       $('#name').removeClass('input-error');
//       $('#companyname').addClass('input-error');
//     } else if (!email) {
//       $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').addClass('input-error');
    
//     } else if (!this.validateEmail(email)) {
//        $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').addClass('input-error');
//     } else if (!phoneno) {
//       $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').addClass('input-error');
//     } else if (!this.validatePhone(phoneno)) {
//        $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').addClass('input-error');
//     } else if (!sector) {
//       $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').removeClass('input-error');
//        $('#sector').addClass('input-error');
//     } else if (!organization) {
//       $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').removeClass('input-error');
//        $('#sector').removeClass('input-error');
//        $('#organization').addClass('input-error');
//     } else if (!profession) {
//        $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').removeClass('input-error');
//        $('#sector').removeClass('input-error');
//        $('#organization').removeClass('input-error');
//        $('#profession').addClass('input-error');
//     } else {
//       $('#name').removeClass('input-error');
//       $('#companyname').removeClass('input-error');
//       $('#email').removeClass('input-error');
//       $('#phoneno').removeClass('input-error');
//        $('#sector').removeClass('input-error');
//        $('#organization').removeClass('input-error');
//       $('#profession').removeClass('input-error');
//     }
//   }

}
