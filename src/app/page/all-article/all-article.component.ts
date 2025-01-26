import { Component, OnInit, HostListener } from '@angular/core';
import { PropertyItemComponent } from "../../component/property-item/property-item.component";
import {Property} from "../../model/property"
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-article',
  standalone: true,
  imports: [PropertyItemComponent,NgFor, NgIf],
  templateUrl: './all-article.component.html',
  styleUrl: './all-article.component.less'
})
export class AllArticleComponent  implements OnInit{

  // start show property
  idActiveFilterItemOfFirststep:number = 0;
  fixSearch:string= ""
  // end show property

  listProperty:Property[] = []

  ngOnInit(): void {
     let item:Property = new Property("Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
     "images/typography-2-770x456.jpg",
     ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
     "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.")
      this.listProperty.push(item);
      this.listProperty.push(item);
      this.listProperty.push(item);
      this.listProperty.push(item);
      this.listProperty.push(item);
      this.listProperty.push(item);

    
      }

        

      @HostListener("window:scroll", [])
      onWindowScroll() {
        const offset = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log(offset);
        if (offset > 379) {
          this.fixSearch = "fix-search"
        } else {
          this.fixSearch = ""
        }
      }

      activeAccordionItem(idItem:number):void{
      this.idActiveFilterItemOfFirststep = idItem
     }

      isActiveAccordionItem(idItem:number):boolean{
          return idItem == this.idActiveFilterItemOfFirststep ? true : false;
      }

}
