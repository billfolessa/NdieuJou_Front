import { createReducer , on} from "@ngrx/store";
import { UserDataState } from "./user.models";
import { setUserData } from "./user.actions";

const userDateStateInit : UserDataState = {
    userDate : {
        address : "",
        email : "",
        password:"",
        phone:"",
        picture:"",
        username:""

    }
}

export const  userDataReducer =  createReducer(
    userDateStateInit,
    on(setUserData, (state,data)=>({...state, userDate:data}))
)