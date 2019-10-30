import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  total: number;
  button:string;
}

export interface Subtotal{
  name:string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',total:1200,button:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',total:1200,button:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',total:1200,button:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',total:1200,button:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',total:1200,button:''},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',total:1200},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',total:1200},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',total:1200},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',total:1200},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',total:1200},
];

const total_data: Subtotal[]= [
  {name:'Subtotal',total:12000},
  {name:'Discount (20%)',total:12000},
  {name:'VAT (10%)',total:12000},
  {name:'Total',total:12000}

]

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','total','button'];
  dataSource = ELEMENT_DATA;

  displayedTotal: string[]= ['name','total'];
  dataSource1 = total_data;
  constructor() { }

  ngOnInit() {
  }

}
