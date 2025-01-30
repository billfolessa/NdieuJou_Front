export class FilterOption{
    sortBy:String[];
    pDate:String[];
    localisation:String[];
    category:String[];

    constructor(sortBy:String[],pDate:String[], localisation:String[],category:String[]){
       this.sortBy  = sortBy;
       this.pDate = pDate;
       this.localisation = localisation;
       this.category = category;
    }

    setSortBy(sortItem:string, isAdd:boolean){
        if(this.sortBy.find(e=>e==sortItem) != sortItem  && isAdd){
            this.sortBy.push(sortItem)
          }
        if(!isAdd){
            this.sortBy = this.sortBy.filter(e=>e != sortItem)
        }
    }
    setPDate(sortItem:string, isAdd:boolean){
        if(this.pDate.find(e=>e==sortItem) != sortItem  && isAdd){
            this.pDate.push(sortItem)
          }
        if(!isAdd){
            this.pDate = this.pDate.filter(e=>e != sortItem)
        }
    }
    setLocalisation(sortItem:string, isAdd:boolean){
        if(this.localisation.find(e=>e==sortItem) != sortItem  && isAdd){
            this.localisation.push(sortItem)
          }
        if(!isAdd){
            this.localisation = this.localisation.filter(e=>e != sortItem)
        }
    }
  
    setCategory(sortItem:string, isAdd:boolean){
        if(this.category.find(e=>e==sortItem) != sortItem  && isAdd){
            this.category.push(sortItem)
          }
        if(!isAdd){
            this.category = this.category.filter(e=>e != sortItem)
        }
    }


}