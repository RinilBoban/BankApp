import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno:any
  psw:any

  testText='This is just to study String Interpolation'
  data="Enter Account Number"

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno
    var psw=this.psw
    const result=this.ds.login(acno,psw)
    if(result){
      alert("Login Success")
      this.router.navigateByUrl('dashboard')
    }
  }
}
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
