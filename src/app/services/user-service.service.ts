import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDate } from '../model/userDate';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private client:HttpClient) { }

  getInfoUser():UserDate{
    
    return
  }

}
