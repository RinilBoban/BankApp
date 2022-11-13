import { Component, OnInit } from '@angular/core';

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

  userDetails:any={
    1000:{acno:1000, username:"Amal",password:123,balance:0},
    1001:{acno:1001, username:"Anu",password:123,balance:0},
    1002:{acno:1002, username:"Arun",password:123,balance:0},
    1003:{acno:1003, username:"Mega",password:123,balance:0},
  }

  constructor() { }

  ngOnInit(): void {
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

    login(){
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        alert("Login Success")
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User not registered')
    }


    // alert("login clicked")
  }

}
