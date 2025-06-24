import { ActionReducerMap, createReducer, createSelector, on } from '@ngrx/store';
import { LogementState } from './logement/logement.models';
import { UserDataState } from './user/user.models';
import { logementReducer } from './logement/logement.reducer';
import { userDataReducer } from './user/user.reducers';
import { CredentialState } from './credentials/credentials.models';
import { credentialReducer } from './credentials/credentials.reducer';

interface AppState{
    logementState: LogementState,
    userDataState: UserDataState
    credentielState : CredentialState
}

const appSelector = (state: AppState) => state


export const logementSelector = createSelector(appSelector,  (appSelectorItem)=>appSelectorItem.logementState);
export const userDateState = createSelector(appSelector, (appSelectorItem)=>appSelectorItem.userDataState);


export const appReducer : ActionReducerMap<AppState> ={
    logementState : logementReducer,
    userDataState : userDataReducer,
    credentielState : credentialReducer
}