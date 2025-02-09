

export class Property{
    title:string;
    description:string;
    illustration:string;
    autherIllustration:string[];
    prix:string
    adresse:string;
    nombreChambre:number;
    surface:string;
    pDate:string;

    constructor( title:string,description:string, illustration:string, 
        autherIllustration:string[],prix:string,  adresse:string, nombreChambre:number,  surface:string, pDate:string){
         this.title = title
            this.adresse = adresse;
            this.description = description;
            this.illustration =illustration;
            this.autherIllustration = autherIllustration;
            this.prix = prix;
            this.nombreChambre =nombreChambre;
            this.surface = surface;
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
        return this.surface;
     } 
}