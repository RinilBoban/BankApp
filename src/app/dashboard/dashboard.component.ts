import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService, private router:Router) {

    this.user=this.ds.currectuser
    
   }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} is credited in your account and the available balance is ${result}`)
    }

    // alert('Deposit works')
  }

  withdraw(){
    
    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1
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

}
