import {Pipe, PipeTransform } from '@angular/core';
import {TreeManager} from '../services/tree-manager';

@Pipe({name: 'nodeSearch',pure:false})
export class NodeSearch implements PipeTransform{
  constructor(private treeManager:TreeManager){
  }

  isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
  }

  transform(value){
    var filteredText = this.treeManager.getFilteredText()
    if (this.isBlank(filteredText)) { return value}
    else {
      return value.filter((node) => node.text.indexOf(filteredText) > -1);
    }
  }
}
