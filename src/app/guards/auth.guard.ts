import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const role = route.data["role"];
  
  if(!authService.islogged()){
     router.navigate(["login"],{queryParams:{redirectUrl:state.url}})
     return false;
  }

  // DOTO recuperation du role de l'utilisateur commecté
  // --- start a refactoriser  k--
    const ngRxGetRoleUser =;
  if(role != ngRxGetRoleUser){
    router.navigateByUrl("/unauthorized")
    return false;
  }

  // --end--


  return true;
};


