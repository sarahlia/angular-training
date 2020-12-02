import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mySortFunction();
  }

  onClick(): void {
    console.log('function called');
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  mySortFunction(): void {
    let elems = document.getElementsByClassName('field-sort');

    // convert NodeList to array
    let elemsArr = Array.from(elems);

    // perform sort
    elemsArr.sort((a, b) => {
      return Number(a.innerHTML) - Number(b.innerHTML);
    });

    // join the array back into HTML
    let output = '';
    for (let i = 0; i < elemsArr.length; i++) {
      output += elemsArr[i].outerHTML;
    }

    // append output to div 'result'
    document.getElementById('result').innerHTML = output;
  }
}
