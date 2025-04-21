import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, interval } from 'rxjs';
import { UserDate } from '../model/userDate';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private urlapi :string = "http://localhost:8080/auth"
  private keyJWTStorate = "keyJwt"

  constructor(private client:HttpClient) { }

  login(credential:{email:string, password:string}):Observable<Object>{
    return this.client.post(this.urlapi,credential).pipe(
      tap((response:any)=>{
        if(response.tocken){
          this.setTocken(response.tocken)
        }
    }))
  }

  register(userDate: UserDate):Observable<Object>{
    return this.client.post(this.urlapi,userDate)
  }

  getTocken():string|null{
    return localStorage.getItem(this.keyJWTStorate)
  }
  private setTocken(jwt:string):void{
     localStorage.setItem(this.keyJWTStorate, jwt)
  }

  logout():void{
    localStorage.removeItem(this.keyJWTStorate)
  }


}
