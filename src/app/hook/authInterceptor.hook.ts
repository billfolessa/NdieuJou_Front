import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { credentialStateSelector, AppState } from "../store/app.store";

export class AuthInterceptor implements HttpInterceptor{

    tocken : string|null = null 
    constructor(private store : Store<AppState>){
         const credential = this.store.select(credentialStateSelector)
         credential.subscribe(credentialSate => this.tocken = credentialSate.tocken)
        
    }

     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
       
      request.clone({
        setHeaders:{ "Authorization": `Bearer ${this.tocken}`}
      })
      
      return next.handle(request)
        
     }
}