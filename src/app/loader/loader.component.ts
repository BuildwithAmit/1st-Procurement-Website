import { Component } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
ngOnInit():void{
  $(document).ready(function() {
    $('.pre-loader').show();
    setTimeout(function() {
      $('.pre-loader').hide();
    }, 2000);
  });
}
}
