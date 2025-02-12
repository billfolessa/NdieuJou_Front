

export class Property{
    id:string="";
    title:string;
    description:string;
    illustration:string;
    autherIllustration:string[];
    prix:string
    adresse:string;
    nombreChambre:number;
    LandSize:string;
    pDate:string;
    propertyType:string = "";
    buildingType:string = "";
    storeys:string = "";
    propertyStatus:string = "";
    propertyTaxes:string = "";
    ParkingType:string = "";

    constructor( title:string,description:string, illustration:string, 
        autherIllustration:string[],prix:string,  adresse:string, nombreChambre:number,  LandSize:string, pDate:string){
         this.title = title
            this.adresse = adresse;
            this.description = description;
            this.illustration =illustration;
            this.autherIllustration = autherIllustration;
            this.prix = prix;
            this.nombreChambre =nombreChambre;
            this.LandSize = LandSize;
            this.pDate = pDate;
        }

     getDescription():string{
        return this.description;
     }  
     getIllustration():string{
        return this.illustration;
     } 
     getAutherIllustration():string[]{
        return this.autherIllustration;
     } 
     getPrix():string{
        return this.prix;
     } 
     getAdresse():string{
        return this.adresse;
     } 
     getNombreChambre():number{
        return this.nombreChambre;
     } 
     getSurface():string{
        return this.LandSize;
     } 
}