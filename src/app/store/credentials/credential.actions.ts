import { createAction, props } from "@ngrx/store";
import { CredentialState } from "./credentials.models";


export const setCredential =  createAction(" set credential to make request", props<CredentialState>()) 
export const cleanCredential = createAction("clean credential")