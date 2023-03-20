import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


ngOnInit():void {
  $('.mobile-link').click(()=>{this.closeMenu()})
}

  showMenu(){
    $('.slider-menu').addClass('active');
    $('.overlay').fadeIn()
    $('body').css('overflow', 'hidden')
  }
  closeMenu(){
    $('.slider-menu').removeClass('active');
    $('.overlay').fadeOut()
    $('body').css('overflow', 'visible')
  }
}
