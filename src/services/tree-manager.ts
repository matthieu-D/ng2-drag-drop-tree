import {Injectable} from '@angular/core';

@Injectable()
export class TreeManager{
  selectedNode;
  filteredText: String;
  hasDropped:Boolean;

  constructor() {
    this.selectedNode = '';
   }

   getSelectedNode(){
     return this.selectedNode;
   }

   getFilteredText() {
     return this.filteredText;
   }

   getHasDropped(){
     return this.hasDropped;
   }

   setHasDropped(hasDropped){
     this.hasDropped = hasDropped;
   }

   setSelectedNode(node){
     this.selectedNode = node;
   }

   setFilteredText(text) {
     this.filteredText = text;
   }
}
