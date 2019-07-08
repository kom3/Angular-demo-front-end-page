import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  bookslot(){

    alert("Currently all our slots are busy!,so kindly watch her video 2 more times,you will die yourself, Thankyou")
  }

  ngOnInit() {
  }

}
