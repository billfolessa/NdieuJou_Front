import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {

  authForm:FormGroup;
  errorMessage:string = "";
  redirectUrl:string|null = "";

  constructor( private fb:FormBuilder, 
    private authService:AuthService, 
    private route :ActivatedRoute,
    private router : Router)
    {
      this.authForm = fb.group({
        email:["",[Validators.required, Validators.email]],
        password : ["",[Validators.required,]]
      })
    }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.paramMap.get("redirectUrl");
  }



  onSubmit():void{
   if(!this.authForm.invalid){
    this.authService.login(this.authForm.getRawValue()).subscribe({
      next: (response)=> {
        if(this.redirectUrl){
          this.router.navigateByUrl(this.redirectUrl)
        }else{
          this.router.navigate([HomeComponent])
        }
       
      },
      error: (error)=> console.log("error "+error),
      complete: ()=> console.log("request completé"),
    })
   }
   
  }

}
