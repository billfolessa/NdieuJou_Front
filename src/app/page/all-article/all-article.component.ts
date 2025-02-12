import { Component, OnInit, HostListener, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { PropertyItemComponent } from "../../component/property-item/property-item.component";
import {Property} from "../../model/property"
import { NgFor, NgIf } from '@angular/common';
import { FilterOption } from '../../model/filter';
import {BrowserModule} from '@angular/platform-browser';
import {PaginationInstance, NgxPaginationModule,} from 'ngx-pagination';
//import { MyAppModule } from '../../app.module';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PageChangedEvent, PaginationComponent } from 'ngx-bootstrap/pagination';
import { FormsModule, NgModel } from '@angular/forms';
import { Header1Component } from '../../component/header1/header1.component';

@Component({
  selector: 'app-all-article',
  standalone: true,
  imports: [PropertyItemComponent,NgFor, NgIf, NgxPaginationModule,PaginationComponent,FormsModule, Header1Component],
  templateUrl: './all-article.component.html',
  styleUrl: './all-article.component.less'
})
export class AllArticleComponent  implements OnInit{

  // start show property

  test(event:any){

    event.preventDefault() 
    console.log(event)
    console.log(event.target)
    console.log(document)
  }

  totalItems = 64;
  currentPage = 4;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  p: number = 1;
  collection: any[] = ["Madawaska region","Saint John region","Westmorland","Madawaska region","Saint John region","Westmorland","Madawaska region","Saint John region","Westmorland","Madawaska region","Saint John region","Westmorland"]; 

  idActiveFilterItemOfFirststep:number[] = [];
  //cityOfQuebec:string[] = ["Bas-Saint-Laurent","Saguenay–Lac-Saint-Jean","Capitale-Nationale","Mauricie","Estrie","Montréal","Outaouais","Abitibi-Témiscamingue","Côte-Nord","Nord-du-Québec","Gaspésie–Îles-de-la-Madeleine","Chaudière-Appalaches","Laval","Lanaudière","Laurentides","Montérégie","Centre-du-Québec"]
  cityOfQuebec:string[] = ["Montréal","Rimouski / Bas-St-Laurent","Laurentides","Centre-du-Québec","Québec City","Sherbrooke","Saint-Jean-sur-Richelieu","Chibougamau / Northern Québec","Abitibi-Témiscamingue","Abitibi-Témiscamingue","Baie-Comeau","Lanaudière","Chaudière-Appalaches","Granby","Saguenay-Lac-Saint-Jean","Mauricie","Saint-Hyacinthe","Gaspé","Sept-Îles "]
  cityOfOntario:string[] = ["Toronto","Ottawa region","Essex region","Halton","Peel region","Middlesex","Nipissing region","Simcoe region","Hamilton region","Lanark region","Leeds and Grenville","Sudbury region","Wellington region","York region"]
  cityOfBrunswic:string[] = ["Madawaska region","Saint John region","Westmorland"]
  cityOfAlberta:string[] = ["Edmonton region"]
  cityOfBritishColumbia:string[] = ["Greater Vancouver"]
  cityOfSaskatchewan:string[] = ["La Ronge ","Saskatoon","Swift Current","Regina Area","Prince Albert","Meadow Lake "]
  cityofNova:string[] = ["Cape Breton","Annapolis Valley","Truro","Halifax","New Glasgow","Bridgewater","View less"]
  cityofNewfoundland:string[] = ["Labrador","Corner Brook","Gander","St. John's"]
  localisationCity:any = [
    {name :  "Quebec", city :this.cityOfQuebec },
    {name :  "Ontario", city :this.cityOfOntario },
    {name :  "Brunswic", city :this.cityOfBrunswic },
    {name :  "Alberta", city :this.cityOfAlberta },
    {name :  "BritishColumbia", city :this.cityOfBritishColumbia },
    {name :  "Saskatchewan", city :this.cityOfSaskatchewan },
    {name :  "Nova Scotia", city :this.cityofNova },
    {name :  "Newfoundland", city :this.cityofNewfoundland },
    ] 
  //fixSearch:string= "" Newfoundland 
  // end show property



  listPropertyInternal:Property[] = []
  listProperty:Property[] = []
  sortOption:string[] = []
  filterOption:FilterOption;

  constructor(){
    this.filterOption = new FilterOption([],[],[],[]);
  }

  ngOnInit(): void {
     let item:Property = new Property("Appartement spacieux à Montréal"," 2022-09-22T15:00:00Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
     "images/typography-2-770x456.jpg",
     ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
     "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2022-09-22T15:00:00")
     item.id ="1" 
     this.listPropertyInternal.push(item);
      let item1:Property = new Property("Appartement spacieux à Montréal"," 2023-09-22T15:00:00 Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
      "images/typography-2-770x456.jpg",
      ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
      "$1300/mon","1808 Bolingbroke Pl, Montréal, TX 76140",2,"40 Sq. Ft.","2023-09-22T15:00:00")
      this.listPropertyInternal.push(item1);
      let item2:Property = new Property("Appartement spacieux à Montréal"," 2025-09-22T15:00:00 Suavitate assentior vituperata eam ut, democritum voluptaria consetetur an mei. Quod maluisset pro ex, eligendi tincidunt complectitur eos ne. Ei cotidieque voluptatibus",
      "images/typography-2-770x456.jpg",
      ["images/footer-gallery-1-85x85.jpg", "images/footer-gallery-2-85x85.jpg", "images/footer-gallery-3-85x85.jpg", "images/footer-gallery-4-85x85.jpg", "images/footer-gallery-4-85x85.jpg"],
      "$1300/mon","1808 Bolingbroke Pl, Fort Worth, TX 76140",2,"40 Sq. Ft.","2025-09-22T15:00:00")
      item2.id="2"
      this.listPropertyInternal.push(item2);
      this.listPropertyInternal.push(item);
      this.listPropertyInternal.push(item);
      this.listPropertyInternal.push(item);
  
      this.listProperty = this.listPropertyInternal;
  
      }

      filterResult(event:any){
        let isAdd :boolean = event.target.checked ? true : false;
        let name:string = event.target.name;
        let value:string = event.target.value
        if(name == "sortBy"){
          this.filterOption.setSortBy(value,isAdd)
        }else if(name ==  "pDate"){
          this.filterOption.setPDate(value,isAdd)
        }else if(name ==  "localisation"){
          this.filterOption.setLocalisation(value,isAdd)
        }else if(name ==  "category"){
          this.filterOption.setCategory(value,isAdd)
        }
        let result:Property[] = this.filterGrowth(this.filterOption.sortBy,this.listPropertyInternal);
         result  = this.filterLocalisation(this.filterOption.localisation,result);
         this.listProperty = result;
        
        /*console.log(this.filterOption)
        if(event.target.checked){
          //this.sortOption.push(event.target.name)
        }else{
          this.sortOption = this.sortOption.filter(e=>e != event.target.name)
        } */

        
      }

      filterGrowth(arraySortOption:string[], propertiesToFilter:Property[]):Property[]{
        
        let result:Property[] = []
        if(propertiesToFilter != null && propertiesToFilter != undefined){
          propertiesToFilter.map((value:Property, index:number)=>result.push(value))
        }
        if(arraySortOption != undefined && arraySortOption != undefined)
        {
          arraySortOption.map(sortItem => {
            if( sortItem == "desc"){
              result =  result.sort((property1:Property, property2:Property):number=>{
                    let date1:Date = new Date(property1.pDate);
                    let date2:Date = new Date(property2.pDate);
                return date1.getTime() < date2.getTime() ? 1 : -1;
              })
            }
          })
        }
        return result;
      }

      filterLocalisation(arraySortOption:string[], propertyToFilter:Property[]):Property[]{
        let result:Property[] = []
        if(propertyToFilter != null && propertyToFilter != undefined){
          propertyToFilter.map((value:Property, index:number)=>result.push(value))
        }
        if( arraySortOption != null && arraySortOption != undefined && arraySortOption.length != 0){
          result = result.filter(item => {
            for( let element of arraySortOption){
              if(item.adresse.includes(element)){
                return item;
              }
            }
            return null;
          })
        }
        return result
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
        }else if(idItem < 0){
          this.idActiveFilterItemOfFirststep = this.idActiveFilterItemOfFirststep.filter(e=>e > 0)
          this.idActiveFilterItemOfFirststep.push(idItem)
        }else{
          this.idActiveFilterItemOfFirststep.push(idItem)
        }
      
     }

      isActiveAccordionItem(idItem:number):boolean{
          if(this.idActiveFilterItemOfFirststep.find(e=>e==idItem) == idItem){
            return true;
          }
          return false;
      }

}
