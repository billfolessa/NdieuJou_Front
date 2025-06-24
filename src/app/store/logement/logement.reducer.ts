import { createReducer, on } from "@ngrx/store";
import { Logement, LogementState } from "./logement.models";
import { loadingLogement, succesLoagingLogment } from "./logment.actions";

const initLogementState : LogementState ={
    loadLogement : false,
    logements : [],
    error : null
}

export const logementReducer = createReducer(
    initLogementState,
    on(loadingLogement, state=>({...state})),
    on(succesLoagingLogment, (state, {logementItems})=>({...state, logements:logementItems}))
    //on(succesLoagingLogment, (state, logementItems)=>({...state, logements:logementItems}))

)