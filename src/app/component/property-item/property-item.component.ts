import { Component, Input, OnInit } from '@angular/core';
import {Property} from "../../model/property"
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-property-item',
  standalone: true,
  imports: [NgFor ],
  templateUrl: './property-item.component.html',
  styleUrl: './property-item.component.less'
})
export class PropertyItemComponent implements OnInit{

  @Input() property:Property = new Property("","","",[],"","",0,"","");
  
 ngOnInit(){
 }

 isHideItem(index:number):string{
   return index>3? "d-none":""
 }
}
