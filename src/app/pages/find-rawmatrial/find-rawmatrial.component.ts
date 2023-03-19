import { Component } from '@angular/core';

@Component({
  selector: 'app-find-rawmatrial',
  templateUrl: './find-rawmatrial.component.html',
  styleUrls: ['./find-rawmatrial.component.css']
})
export class FindRawmatrialComponent {

  constructor() { window.scrollTo(0, 0) }


  elements = [
    {
      name: 'metals',
      icon: '../../../assets/asserts/svgs/metal.svg'
    },{
      name: 'chemicals',
      icon: '../../../assets/asserts/svgs/chemical.svg'
    },{
      name: 'polymers',
      icon: '../../../assets/asserts/svgs/polymers.svg'
    },{
      name: 'composites',
      icon: '../../../assets/asserts/svgs/composites.svg'
    },{
      name: 'ceramics',
      icon: '../../../assets/asserts/svgs/ceramic.svg'
    },
  ]

}
