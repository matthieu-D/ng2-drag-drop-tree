import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Draggable,Droppable} from 'primeng/primeng';
import {TreeManager} from '../services/tree-manager';
import {NodeSearch} from '../pipes/node-search';
import {XEditableText} from '../ng2-xeditable-text.directive';

@Component({
  selector: 'tree-node',
  directives: [Draggable,Droppable, TreeNode, XEditableText],
  template: require('./tree-node.html'),
  pipes: [NodeSearch]
})

export class TreeNode{
  @Input() children;
  @Output() askedChildDeletion = new EventEmitter();
  expanded:Boolean;
  constructor(private treeManager:TreeManager) {}

  addNewNode(node) {
    node.subNodes = [...node.subNodes, this.treeManager.getNewNode()];
  }

  deleteNode(node) {
    this.children.splice(this.children.indexOf(node), 1);
  }

  getFilteredText(){
    this.treeManager.getFilteredText();
  }

  onDragStart(event,child){
    this.treeManager.setSelectedNode(child);
  }

  onDragEnd(event,child){
    if (this.treeManager.getHasDropped()){
      this.treeManager.setHasDropped(false)
      this.children.splice(this.children.indexOf(child), 1);
    }
  }

  onDrop(event,node){
    if (this.treeManager.getSelectedNode() != node){
      this.treeManager.setHasDropped(true);
      node.subNodes = [...node.subNodes, this.treeManager.getSelectedNode()];
    }
  }

  toggle(child) {
    child.expanded = !child.expanded;
  }

}
