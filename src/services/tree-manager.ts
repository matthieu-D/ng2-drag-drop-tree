import {Injectable} from '@angular/core';

@Injectable()
export class TreeManager{
  selectedNode;

  constructor() {
    this.selectedNode = '';
   }
    getSelectedNode(){
      return this.selectedNode;
    }

    setSelectedNode(node){
      this.selectedNode = node;
    }
}
