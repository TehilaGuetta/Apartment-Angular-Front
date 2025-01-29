import { Component } from '@angular/core';
import { advertiser } from 'src/app/classes/advertiser';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  advertiser:advertiser=new advertiser();
reg:boolean=false;
  constructor(public advertiserService:AdvertiserService) { }

  ngOnInit() {
  }
  save(){
    debugger
   return this.advertiserService.register(this.advertiser).subscribe(data=>{this.reg=data},err=>{console.log(err)})    
  }
  
}
