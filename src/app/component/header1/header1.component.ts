import { Component } from '@angular/core';

@Component({
  selector: 'app-header1',
  standalone: true,
  imports: [],
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.less'
})
export class Header1Component {

   activeItem:string="Home";

  classMenuItem(menuItem:string){
    let classResultItem:string=""
    if(menuItem == this.activeItem){
      classResultItem = "rd-nav-item  active";
    }else{
      classResultItem = "rd-nav-item";
    }
    return classResultItem;
  }

}
