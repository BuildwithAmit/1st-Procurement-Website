import { Component, Input } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  @Input() faqData!: any[];

  showAnswer(id:any){
  $('.answer-div').slideUp();
  $('.plus-icon').html('add');
  $('#icon-'+id).html('remove');
  $('#answer-'+id).slideDown();
  }
}
