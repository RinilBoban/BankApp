import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname:any
  acno:any
  psw:any

  constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder) { }

// create register form model
registerForm=this.formbuilder.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  // control pass from ts to the html file

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw

    if(this.registerForm.valid){
      const result=this.ds.register(acno,uname,psw)
      if(result){
        alert('Registration Successfull')
        this.router.navigateByUrl('')
      }
      else{
        alert('User already exist')
      }  
    }
    else{
      alert('Invalid Data entered')
    }

  }

}
