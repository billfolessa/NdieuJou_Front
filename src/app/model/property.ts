

export class Property{
    description:string;
    illustration:string;
    autherIllustration:string[];
    prix:string
    adresse:string;
    nombreChambre:number;
    surface:string;

    constructor( description:string, illustration:string, 
        autherIllustration:string[],prix:string,  adresse:string, nombreChambre:number,  surface:string){
            this.adresse = adresse;
            this.description = description;
            this.illustration =illustration;
            this.autherIllustration = autherIllustration;
            this.prix = prix;
            this.nombreChambre =nombreChambre;
            this.surface = surface;
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