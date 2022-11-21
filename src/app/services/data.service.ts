import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    currectuser:any
  // redundant data
    userDetails:any={
    1000:{acno:1000, username:"Amal",password:123,balance:0},
    1001:{acno:1001, username:"Anu",password:123,balance:0},
    1002:{acno:1002, username:"Arun",password:123,balance:0},
    1003:{acno:1003, username:"Mega",password:123,balance:0},
  }


  constructor() { }

  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      return true
    }
  }

  login(acno:any,psw:any){

    var userDetails=this.userDetails
    this.currectuser=userDetails
    this.currectuser=userDetails[acno]['username']


    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        return true
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('User not registered')
      return false
    }
    // alert("login clicked")
  }

  deposit(acno:any,psw:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)   // to convert amount data type from string to int
    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        return userDetails[acno]['balance']
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('Incorrect Username')
      return false
    }
  }

  withdraw(acno1:any,psw1:any,amnt1:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt1)
    if(acno1 in userDetails){
      if(psw1==userDetails[acno1]['password']){
        if(amount<=userDetails[acno1]['balance']){
          userDetails[acno1]['balance']-=amount
          return userDetails[acno1]['balance']
        }
        else{
          alert('Insufficient Balance')
        }
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('Incorrect Username')
      return false
    }
  }

}
