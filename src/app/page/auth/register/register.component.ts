import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service.service';
import { response } from 'express';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  registerFormGroup: FormGroup
  errorMessage:string =""
  
  constructor(private fb:FormBuilder, private authService:AuthService){
    this.registerFormGroup = fb.group({
      email:['',[Validators.email,Validators.required]],
      username:['',[Validators.required]],
      password: ['',[Validators.required,Validators.min(6)]],
      address:['']
    })

  }

  onSubmit():void{
    if(this.registerFormGroup){
      this.authService.register(this.registerFormGroup.getRawValue())..subscribe({
        next : (response)=>console.log("register success "+response),
        error: (error)=> {this.errorMessage = "register error"+error;
          console.log(this.errorMessage)},
        complete: ()=>console.log("reques complet")
      })
    }
  }

}
