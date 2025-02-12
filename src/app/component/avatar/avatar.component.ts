import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.less'
})
export class AvatarComponent1 implements OnInit{

@Input() fullName:string = ""
color:string = ""
initualName:string=""
tabColor:string[] = ["#325459","#5a4d7a","#8c6321","#d64161","#855a3c","#7a7756","#6d7b8c;"]

ngOnInit(): void {
  let randomMumber = Math.floor(Math.random()*10);
  randomMumber = randomMumber > 6 ? randomMumber-4 : randomMumber
  this.color = "background-color:"+this.tabColor[randomMumber]
  let tabName = this.fullName.split(" ");
  if(tabName.length<2){
    this.initualName =   tabName[0][0]
  }else{
    this.initualName = this.initualName =   tabName[0].charAt(0).toUpperCase() + tabName[1].charAt(0).toUpperCase()
  }
}
 
}
