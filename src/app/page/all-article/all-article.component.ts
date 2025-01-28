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
  idActiveFilterItemOfFirststep:Number[] = [];
  //fixSearch:string= ""
  // end show property

  listPropertyInternal:Property[] = []
  listProperty:Property[] = []
  sortOption:string[] = []

  ngOnInit(): void {
     let item:Property = new Property(" 2022-09-22T15:00:00Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
     "images/typography-2-770x456.jpg",
     ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
     "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2022-09-22T15:00:00")
      this.listPropertyInternal.push(item);
      let item1:Property = new Property(" 2023-09-22T15:00:00 Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
      "images/typography-2-770x456.jpg",
      ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
      "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2023-09-22T15:00:00")
      this.listPropertyInternal.push(item1);
      let item2:Property = new Property(" 2025-09-22T15:00:00 Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
      "images/typography-2-770x456.jpg",
      ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
      "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2025-09-22T15:00:00")
      this.listPropertyInternal.push(item2);
      this.listPropertyInternal.push(item);
      this.listPropertyInternal.push(item);
      this.listPropertyInternal.push(item);
  
      this.listProperty = this.listPropertyInternal;
  
      }

      filterResult(event:any){
        if(event.target.checked){
          this.sortOption.push(event.target.name)
        }else{
          this.sortOption = this.sortOption.filter(e=>e != event.target.name)
        }
        this.filterProcess()
      }

      filterProcess(){
        if(this.listPropertyInternal != null && this.listPropertyInternal != undefined){
          this.listProperty =  this.listPropertyInternal.sort((property1:Property, property2:Property):number=>{
                let date1:Date = new Date(property1.pDate);
                let date2:Date = new Date(property2.pDate);
            return date1.getTime() < date2.getTime() ? 1 : -1;
          })
        }
      }

      
      /*@HostListener("window:scroll", [])
      onWindowScroll() {
        const offset = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log(offset);
        if (offset > 379) {
          this.fixSearch = "fix-search"
        } else {
          this.fixSearch = ""
        }
      }*/

      activeAccordionItem(idItem:number):void{
        if(this.idActiveFilterItemOfFirststep.find(e=>e==idItem) == idItem){
          this.idActiveFilterItemOfFirststep = this.idActiveFilterItemOfFirststep.filter(e=>e!=idItem)
          //this.idActiveFilterItemOfFirststep = 0
        }else{
          this.idActiveFilterItemOfFirststep.push(idItem)
        }
      
     }

      isActiveAccordionItem(idItem:number):boolean{
        console.log
          if(this.idActiveFilterItemOfFirststep.find(e=>e==idItem) == idItem){
            return true;
          }
          return false;
      }

}
