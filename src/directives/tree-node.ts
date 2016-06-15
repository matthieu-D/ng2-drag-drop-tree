import { Component, Input } from '@angular/core';
import {Draggable,Droppable} from 'primeng/primeng';
import {TreeManager} from '../services/tree-manager';

@Component({
  selector: 'tree-node',
  directives: [Draggable,Droppable, TreeNode],
  template: require('./tree-node.html'),
})

export class TreeNode{
  @Input() children;
  treeManager:TreeManager;
  expanded:Boolean;
  constructor(treeManager:TreeManager) {
    this.treeManager = treeManager;
  }

  onDragStart(event,child){
    this.treeManager.setSelectedNode(child);
  }

  onDragEnd(event,child){
    this.children.splice(this.children.indexOf(child), 1);
  }

  onDrop(event,node){
    node.subNodes = [...node.subNodes, this.treeManager.getSelectedNode()];
  }

  toggle(child) {
    child.expanded = !child.expanded;
  }

}
