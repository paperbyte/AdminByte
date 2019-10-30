import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  path: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Table',
    path:'',
    children: [
      {name: 'Basic Table', path:'basic-table'},
      {name:'Filter Table',path:'filter-table'},
      {name:'Selection Table', path:'selection-table'},
      {name:'Sorting Table', path:'sorting-table'}
    ]
  }, {
    name: 'Forms',
    path:'',
    children: [
      {
        name: 'Green',
        path:'',
        children: [
          {name: 'Broccoli', path:''},
          {name: 'Brussel sprouts',  path:''},
        ]
      }, {
        name: 'Orange',
        path:'',
        children: [
          {name: 'Pumpkins',  path:''},
          {name: 'Carrots',  path:''},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.dataSource.data = TREE_DATA;
   }
   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getParent(node) {
    console.log(node);
  }
}
