import { Component, OnInit } from '@angular/core';
import { Header1Component } from "../../component/header1/header1.component";
import { Property } from '../../model/property';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-fulldisplay',
  standalone: true,
  imports: [Header1Component, NgFor, NgIf],
  templateUrl: './fulldisplay.component.html',
  styleUrl: './fulldisplay.component.less'
})
export class FulldisplayComponent implements OnInit{

  property:Property = new Property("","","",[],"","",0,"","",);

  ngOnInit(): void {
    let item:Property = new Property('"Appartement spacieux à Montréal"','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru eiusmod tempor incididunt ut labore et.',
    "images/typography-2-770x456.jpg",
    ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", 
      "images/footer-gallery-3-85x85.jpg", 
      "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"
    ],
    "1200","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2022-09-22T15:00:00")

    this.property = item
  }


  
}
