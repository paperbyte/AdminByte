import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  
})
export class DatepickerComponent implements OnInit {

  startDate = new Date(1990, 0, 1);

  // selected vale dates

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  //min and max value of date
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  //filter date
  myFilter = (d: Date): boolean => {
    const day = d.getDay();

  // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  //event and change input
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  //custom format
 
  constructor() { }

  ngOnInit() {
  }

}
