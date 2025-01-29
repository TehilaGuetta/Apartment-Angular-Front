import { Component, OnInit } from '@angular/core';
import { advertiser } from 'src/app/classes/advertiser';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public advertiserService:AdvertiserService) { }
 pass:string = ""
 email:string =""
 nlog:boolean = false
 log:boolean = true
  ngOnInit() {
  }
  login(){
    debugger
 this.advertiserService.login(this.email,this.pass).subscribe(mydata=>{
  debugger;
  this.advertiserService.adver=mydata
  if(this.advertiserService.adver==null)
    this.nlog=true
  ;
  else
  this.advertiserService.connect=true

  
},err=>{console.log(err)})
 


}}
