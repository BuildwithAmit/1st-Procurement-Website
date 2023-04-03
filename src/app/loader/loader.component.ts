import { Component } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
ngOnInit():void{
  $('.pre-loader').fadeIn();
  $(document).ready(function() {
    $('.pre-loader').fadeIn();
    setTimeout(function() {
      $('.pre-loader').fadeOut();
    }, 2000);
  });
}
}
