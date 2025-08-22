import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import {AppState, userDateStateSelector} from "../store/app.store"
import { Store } from '@ngrx/store';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const role = route.data["role"];
  const stateStore = inject(Store<AppState>)
  
  if(!authService.islogged()){
     router.navigate(["login"],{queryParams:{redirectUrl:state.url}})
     return false;
  }

 
  var userRole: string = "";
  const userDataState =  stateStore.select(userDateStateSelector)
  userDataState.subscribe(userDataItem => userRole = userDataItem.userDate.role)

  if(role != userRole){
    router.navigateByUrl("/unauthorized")
    return false;
  }

  return true;
};


