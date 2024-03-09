import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {



  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },

    {
      "Id": 2,
      "Name": "Eros House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "Hill Flat",
      "Type": "Flat",
      "Price": 12000
    },
    {
      "Id": 4,
      "Name": "Morgan Villa",
      "Type": "Villa",
      "Price": 12000
    },
    {
      "Id": 5,
      "Name": "Rose Villa",
      "Type": "Villa",
      "Price": 12000
    }
  ]
}
