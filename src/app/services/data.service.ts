import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

// global http header object

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

    currentuser:any
    currentacno:any
  // redundant data
    userDetails:any={
    1000:{acno:1000, username:"Amal",password:123,balance:0,transaction:[]},
    1001:{acno:1001, username:"Anu",password:123,balance:0,transaction:[]},
    1002:{acno:1002, username:"Arun",password:123,balance:0,transaction:[]},
    1003:{acno:1003, username:"Mega",password:123,balance:0,transaction:[]},
  }


  constructor(private http:HttpClient) {
    // this.getData()
   }

  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem('currentacno',JSON.stringify(this.currentacno))
    }
  }

  // getData(){
  //   if(localStorage.getItem('database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currectuser=JSON.parse(localStorage.getItem('currentuser') || '')
  //   }
  //   if(localStorage.getItem('currentacno')){
  //     this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
  //   }

  // }

  register(acno:any,username:any,password:any){
    
    const data={
      acno,
      username,
      password
    }

    return this.http.post('http://localhost:3000/register',data)



    // var userDetails=this.userDetails
    // if(acno in userDetails){
    //   return false
    // }
    // else{
    //   userDetails[acno]={acno,username,password,balance:0,transaction:[]}
    //   this.saveData()
    //   return true
    // }
  }

  login(acno:any,psw:any){

    const data={
      acno,
      psw
    }


    return this.http.post('http://localhost:3000/login',data)

    // var userDetails=this.userDetails
    // this.currectuser=userDetails
    // this.currectuser=userDetails[acno]['username']


    // if(acno in userDetails){
    //   if(psw==userDetails[acno]['password']){
    //     this.currentacno=acno
    //     this.saveData()
    //     return true
    //   }
    //   else{
    //     alert('Incorrect Password')
    //     return false
    //   }
    // }
    // else{
    //   alert('User not registered')
    //   return false
    // }
    // // alert("login clicked")
  }

getToken(){
  // fetch token from local storage
  const token=JSON.parse(localStorage.getItem('token')||'')
  // append token inside the header

  let headers = new HttpHeaders()

  if(token){
    options.headers=headers.append('x-access-token',token)
  }
  return options  // to get token
}


  deposit(acno:any,psw:any,amnt:any){

    const data={
      acno,
      psw,
      amount:amnt
    }


    return this.http.post('http://localhost:3000/deposit',data,this.getToken())


  }




  //   let userDetails=this.userDetails
  //   var amount=parseInt(amnt)   // to convert amount data type from string to int
  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]['password']){
  //       userDetails[acno]['balance']+=amount

  //       //add deposit details in transaction array
  //       userDetails[acno]['transaction'].push({type:'Credit',amount})
  //       this.saveData()
  //       return userDetails[acno]['balance']
  //     }
  //     else{
  //       alert('Incorrect Password')
  //       return false
  //     }
  //   }
  //   else{
  //     alert('Incorrect Username')
  //     return false
  //   }
  // }

  withdraw(acno:any,psw:any,amnt:any){

    const data={
      acno,
      psw,
      amount:amnt
    }


    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())




    // let userDetails=this.userDetails
    // var amount=parseInt(amnt1)
    // if(acno1 in userDetails){
    //   if(psw1==userDetails[acno1]['password']){
    //     if(amount<=userDetails[acno1]['balance']){
    //       userDetails[acno1]['balance']-=amount

    //       userDetails[acno1]['transaction'].push({type:'Debit',amount})
    //       this.saveData()
    //       return userDetails[acno1]['balance']
    //     }
    //     else{
    //       alert('Insufficient Balance')
    //     }
    //   }
    //   else{
    //     alert('Incorrect Password')
    //     return false
    //   }
    // }
    // else{
    //   alert('Incorrect Username')
    //   return false
    // }
  }

  getTransaction(acno:any){
    const data={
      acno
      }

    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  }

  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno)
  }
}
