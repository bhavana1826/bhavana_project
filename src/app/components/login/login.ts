import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  //  name="kalyani";
  //  age="30";
   username = '';
  Password = '';
  //  OnLogin(){
  //   alert("loged in successfully")
  //  }
  constructor(private router:Router){

  }
 OnLogin(){
  this.router.navigate(['products'])
  if(this.username==='bhavana' && this.Password==='bhavana123'){
    alert("login successfull")
  }else if(this.username!='bhavana'){
    alert("incorrect username")
  }else{
    alert("Incorrect password")
  }
  } 
 OnReset()
{
this.username='';
this.Password='';
}
}
