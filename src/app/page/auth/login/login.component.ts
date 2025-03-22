import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  authForm:FormGroup;
  errorMessage:string="";

  constructor( private fb:FormBuilder, private authService:AuthService){
    this.authForm = fb.group({
      email:["",[Validators.required, Validators.email]],
      password : ["",[Validators.required,]]
    })
  }

  onSubmit():void{
   if(!this.authForm.invalid){
    this.authService.login(this.authForm.getRawValue()).subscribe({
      next: (response)=> console.log("succes request"),
      error: (error)=> console.log("error "+error),
      complete: ()=> console.log("request completé"),
    })
   }
   
  }

}
