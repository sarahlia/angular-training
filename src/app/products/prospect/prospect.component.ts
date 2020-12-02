import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('function called');
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
