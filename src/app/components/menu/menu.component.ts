import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public advertiserService:AdvertiserService) { }

  ngOnInit() {
  }

}
