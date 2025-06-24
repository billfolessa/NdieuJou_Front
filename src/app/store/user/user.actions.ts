import { createAction, props } from "@ngrx/store";
import { UserDataState } from "./user.models";
import { UserDate } from "../../model/userDate";


export const setUserData =  createAction(" set userdata in state NgRx", props<UserDate>())