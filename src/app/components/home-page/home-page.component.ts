import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public apservise:ApartmentService) { }
  showPrice:boolean=false;
  showIdAdv:boolean=false;
  showCity:boolean=false;
  showFilters:boolean=true;
  city:string="";
  maxPrice:number=0
  minPrice:number=0
  lname:string=""
  fname:string=""
  ngOnInit() {
    if(this.apservise.arrap.length==0)
      this.apservise.lodeApartment()
  }
  FilterByCity(){
    debugger
this.apservise.getapartmentbycity(this.city).subscribe(data =>{this.apservise.arrap=data},err=>{console.log(err)})
this.showCity=false;
this.showFilters=true
  }
  FilterByPrice(){
    this.apservise.getapartmentbyprice(this.minPrice,this.maxPrice).subscribe(mydata=>{this.apservise.arrap=mydata},err=>{console.log(err)})
    this.showPrice=false;
    this.showFilters=true
  }
  FilterByIdAdvertiser(){
    this.apservise.getapartmentbyad(this.fname,this.lname).subscribe(mydata=>{this.apservise.arrap=mydata},err=>{console.log(err)})
    this.showIdAdv=false;
    this.showFilters=true
  }

}
