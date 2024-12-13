import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uid:any;
  upass:any;
  userData:any;
  constructor(public _dbService:DbserviceService, public _route:Router){}

  checkUser(){
    this._dbService.getRecord("users").subscribe((response)=>{
      console.log(response);
      this.userData = response;
      const currentUser = this.userData.filter((value:any,index:any)=>{
        return value.userid === this.uid && value.userpass === this.upass;
      })
      if(currentUser.length>0){
          sessionStorage.setItem("user",this.uid);
          window.alert("Login Successfull !");
          this._route.navigate(["/mainDashboard"])
      }
      else{
        window.alert("Wrong Crenditials")
        this.uid='';
        this.upass='';
      }
    })
  }
}
