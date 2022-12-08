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

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  constructor(private ds:DataService, private router:Router, private fb: FormBuilder) {

    this.user=this.ds.currectuser
    
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentacno')){
      alert('Please log in again')
      this.router.navigateByUrl('')
    }
  }

  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} is credited in your account and the available balance is ${result}`)
    }

    // alert('Deposit works')
  }

  withdraw(){
    
    var acno1=this.withdrawForm.value.acno1
    var psw1=this.withdrawForm.value.psw1
    var amnt1=this.withdrawForm.value.amnt1
    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1} is debited from your account and the available balance is ${result}`)
    }

    // alert('Withdraw works')

  }

  logout(){
    localStorage.removeItem('currentacno')
    localStorage.removeItem('currentuser')
    this.router.navigateByUrl('')
  }
  delete(){
    alert('Delete clicked')
  }

}
