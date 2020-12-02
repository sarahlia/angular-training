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
    let list = document.getElementById('fieldOrder');

    let nodesToSort = list.querySelectorAll('.individual-field');
    Array.prototype.map.call(nodesToSort, (node) => {
      return {
        node: node,
        relevantText: node.querySelector('.field-sort').textContent
      };
    }).sort((a, b) => {
      console.log(a, b);
      return a.relevantText.localeCompare(b.relevantText);
    }).forEach((item) => {
      list.appendChild(item.node);
    });
  }
}
