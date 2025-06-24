import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  @Input() activeItem:string="Home";

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
