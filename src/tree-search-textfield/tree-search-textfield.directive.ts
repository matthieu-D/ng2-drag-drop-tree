import {Component} from '@angular/core';
import {TreeManager} from '../../ng2-drag-drop-tree';

@Component({ selector: 'tree-search-textfield', template:`<input type='text' [(ngModel)]='val' (ngModelChange)='filter(val)'>`})
export class TreeSearchTextField{
  constructor(private treeManager:TreeManager) {}

  filter(value){
    this.treeManager.setFilteredText(value);
  }
}
