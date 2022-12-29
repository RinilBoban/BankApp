import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno:any
  psw:any
  amnt:any
  acno1:any
  psw1:any
  amnt1:any
  user:any
  sdate:any

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  
  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  constructor(private ds:DataService, private router:Router, private fb: FormBuilder) {

    if(localStorage.getItem('currentuser')){
    this.user=JSON.parse(localStorage.getItem('currentuser')||'')
  }
    this.sdate= new Date();

    // this.user=this.ds.currentuser
    // this.sdate= new Date();
    
   }

  ngOnInit(): void {

    // this.user=JSON.parse(localStorage.getItem('currentuser')||'');
    // console.log(this.user);

    if(!localStorage.getItem('currentacno')){
      alert('Please log in again')
      this.router.navigateByUrl('')
    }
  }

  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt
    if(this.depositForm.valid){
    this.ds.deposit(acno,psw,amnt)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    } 
    )
    // if(result){
    //   alert(`${amnt} is credited in your account and the available balance is ${result}`)
    // }

    // alert('Deposit works')
  }}

  withdraw(){
    
    var acno=this.withdrawForm.value.acno
    var psw=this.withdrawForm.value.psw
    var amnt=this.withdrawForm.value.amnt
    if(this.withdrawForm.valid){
    this.ds.withdraw(acno,psw,amnt)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    } 
    )

    // const result=this.ds.withdraw(acno1,psw1,amnt1)
    // if(result){
    //   alert(`${amnt1} is debited from your account and the available balance is ${result}`)
    // }

    // // alert('Withdraw works')

  }}

  logout(){
    localStorage.removeItem('currentacno')
    localStorage.removeItem('currentuser')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
  delete(){
    // alert('Delete clicked')
    this.acno=JSON.parse(localStorage.getItem('currentacno')||'');
  }
  onCancel(){
    this.acno="";
  }
  onDelete(event:any){
    // alert(event)
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      alert(result.message)
      // this.router.navigateByUrl('')
      this.logout();
    },
    result=>{
      alert(result.error.message)
    }
    )
  }

}
