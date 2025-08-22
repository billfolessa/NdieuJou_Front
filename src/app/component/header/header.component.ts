import { Component, Input, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  activeItemNavBar:string="";

  constructor(private router : Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.activeItemNavBar = event.urlAfterRedirects;
      }
    })
  }

  classMenuItem(menuItem:string):string{
    let classResultItem:string=""
    if(menuItem == this.activeItemNavBar){
      classResultItem = "rd-nav-item  active";
    }else{
      classResultItem = "rd-nav-item";
    }
    return classResultItem;
  }

}
