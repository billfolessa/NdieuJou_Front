
export interface Logement{
    id:string,
    title:String,
    description:String
    prix:number
}

export interface LogementState{
    logements:Logement[],
    loadLogement:boolean,
    error:any
}