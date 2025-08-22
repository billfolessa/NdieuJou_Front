import { createReducer, on } from "@ngrx/store";
import { CredentialState } from "./credentials.models";
import { cleanCredential, setCredential } from "./credential.actions";

const credentialStateInit : CredentialState = {
    tocken : "",
    refreshTocken: ""
}

export const credentialReducer = createReducer(
    credentialStateInit,
    on(setCredential, (state, data)=>({...state, tocken:data.tocken, refreshTocken : data.refreshTocken})),
    on(cleanCredential, (state)=>({...state, tocken:"", refreshTocken:""}))
)