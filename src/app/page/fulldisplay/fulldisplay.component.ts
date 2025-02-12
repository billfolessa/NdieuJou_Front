import { Component, OnInit } from '@angular/core';
import { Header1Component } from "../../component/header1/header1.component";
import { Property } from '../../model/property';
import { NgFor, NgIf } from '@angular/common';
import { AvatarComponent1 } from "../../component/avatar/avatar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fulldisplay',
  standalone: true,
  imports: [Header1Component, NgFor, NgIf, AvatarComponent1],
  templateUrl: './fulldisplay.component.html',
  styleUrl: './fulldisplay.component.less'
})
export class FulldisplayComponent implements OnInit{

  property:Property = new Property("","","",[],"","",0,"","",);
  idProperty:string = "";
constructor(private route:ActivatedRoute){
  route.params.subscribe(param=>{
    this.idProperty = param["idProperty"]
  })
}
  
  ngOnInit(): void {
    let item:Property = new Property('"Appartement spacieux à Montréal"','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru eiusmod tempor incididunt ut labore et.',
    "images/typography-2-770x456.jpg",
    ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", 
      "images/footer-gallery-3-85x85.jpg", 
      "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"
    ],
    "1200","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2022-08-22T15:00:00")
    item.propertyType = "Single Family";
    item.buildingType = "House";
    item.storeys = "1";
    item.propertyTaxes = "3,902"
    item.ParkingType = "Attached Garage, Garage"

    this.property = item
  }

  pdateFormat(property:Property):string{
    let pDate:Date = new Date(property.pDate);
    return pDate.toUTCString().substring(0,16);
  }


  
}
