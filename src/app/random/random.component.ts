import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  //hard coded max number
  private max:number = 1000000;
  private last:number;
  private random: number;
  constructor() { }

  public getRandomNumber( ){
    // prime numbers closest to one million
    this.last = (this.last * 999979 ) % 999983;
    return this.last % this.max;
  }

  ngOnInit() {
    //every 3 secs
    Observable.interval(3000).map((x) => {
      this.last = (new Date().getTime() / 1000) % this.max;
    }).subscribe((x) => {
      this.random = Math.floor(this.getRandomNumber());
    });
  }


}
