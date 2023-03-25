import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
ngOnInit(): void{
  $(document).ready(()=>{
  
    window.scrollTo(0,0);
  })

}
}
