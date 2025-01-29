import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apartment } from '../classes/apatment';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  urt:string="http://localhost:8080/"
  constructor(public myhttp:HttpClient) {}
  getapartment():Observable<Array<apartment>> { 
    return this.myhttp.get<Array<apartment>>(`${this.urt}getapartment`);
  }
  arrap:Array<apartment> = new Array<apartment>()
  lodeApartment(){
    this.getapartment().subscribe(mydata=>{this.arrap=mydata;},err=>{console.log(err)})
  }
  getapartmentbycity(city:string): Observable<Array<apartment>>{
    debugger
    return this.myhttp.get<Array<apartment>>(`${this.urt}getapartmentbycity/${city}`);
  }
  getapartmentbyprice(minPriceprice:number,maxPrice:number): Observable<Array<apartment>>{
    return this.myhttp.get<Array<apartment>>(`${this.urt}getapartmentbyprice/${minPriceprice}/${maxPrice}`);
  }
  getapartmentbyad(fname:string,lname:string): Observable<Array<apartment>>{
    return this.myhttp.get<Array<apartment>>(`${this.urt}getapartmentbyad/${fname}/${lname}`);
  }

}
