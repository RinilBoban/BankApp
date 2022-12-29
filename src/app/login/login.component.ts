import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  testText='This is just to study String Interpolation'
  data="Enter Account Number"

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
                            psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@#]+')]]})

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      var acno=this.loginForm.value.acno;
      var psw=this.loginForm.value.psw;
      this.ds.login(acno,psw)
      .subscribe((result:any)=>{
        localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message);
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      }
        )
      }
    }
  } 
      
//       if(result){
//         alert("Login Success")
//         this.router.navigateByUrl('dashboard')
//       }  
//     }
//     else{
//       alert('Invalid Form')
//     }
//   }
// }


  // login(){
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails

  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]['password']){
  //       alert("Login Success")
  //     }
  //     else{
  //       alert('Incorrect Password')
  //     }
  //   }
  //   else{
  //     alert('User not registered')
  //   }


  //   // alert("login clicked")
  // }

  // login(a:any,b:any){
  //   var acno=a.value
  //   var psw=b.value
  //   var userDetails=this.userDetails

  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]['password']){
  //       alert("Login Success")
  //     }
  //     else{
  //       alert('Incorrect Password')
  //     }
  //   }
  //   else{
  //     alert('User not registered')
  //   }


  //   // alert("login clicked")
  // }


  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(event.target.value);
  // }
  // pswChange(event:any){
  //   this.psw=event.target.value
  // }
//--------------------------------
//      2.1 Two Way Binding