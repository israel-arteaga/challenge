import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit{

  private futureDate:Date;
  //hard coded date
  private futureDateString:string = 'June 14, 2018 12:00:00';
  private difference: number;
  private remainingTime = {};

  constructor() {
  }

  countdown(time){
    var days, hours, minutes, seconds;
    days = Math.floor(time / 86400);
    time -= days * 86400;
    hours = Math.floor(time / 3600) % 24;
    time -= hours * 3600;
    minutes = Math.floor(time / 60) % 60;
    time -= minutes * 60;
    seconds = time % 60;

    return {
      'days' : days,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }


  ngOnInit() {

    Observable.interval(1000).map((x) => {
      this.futureDate = new Date(this.futureDateString);
      this.difference =Math.floor((this.futureDate.getTime() - new Date().getTime()) / 1000);
    }).subscribe((x) => {
      this.remainingTime = this.countdown(this.difference);
    });
  }

}
