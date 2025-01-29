import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { advertiser } from '../classes/advertiser';
@Injectable({
  providedIn: 'root'
})

export class AdvertiserService {



  urt:string="http://localhost:8080/"
  constructor(public myhttp:HttpClient) {}
connect:boolean = false;
adver:advertiser=new advertiser()
//הרשמה
register(advertiser:advertiser):Observable<boolean>
{
  debugger
  return this.myhttp.post<boolean>(this.urt+"register",advertiser);
}
//התחברות
login(email:string,password:string):Observable<advertiser>
{
  debugger
  return this.myhttp.get<advertiser>(`${this.urt}login/${email}/${password}`);
}

  
}
