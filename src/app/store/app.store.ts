import { ActionReducerMap, createReducer, createSelector, on } from '@ngrx/store';
import { LogementState } from './logement/logement.models';
import { UserDataState } from './user/user.models';
import { logementReducer } from './logement/logement.reducer';
import { userDataReducer } from './user/user.reducers';
import { CredentialState } from './credential/credentials.models';
import { credentialReducer } from './credential/credentials.reducer';

export interface AppState{
    logementState: LogementState,
    userDataState: UserDataState
    credentielState : CredentialState
}

 const appSelector = (state: AppState) => state


export const logementSelector = createSelector(appSelector,  (appSelectorItem)=>appSelectorItem.logementState);
export const userDateStateSelector = createSelector(appSelector, (appSelectorItem)=>appSelectorItem.userDataState);
export const credentialStateSelector = createSelector(appSelector, (appSelectorItem)=>appSelectorItem.credentielState)

export const appReducer : ActionReducerMap<AppState> ={
    logementState : logementReducer,
    userDataState : userDataReducer,
    credentielState : credentialReducer
}