import {Component, Input} from '@angular/core';

@Component({ selector: 'editable-text', template:`
  <span *ngIf='isEditable'> <input type='text' (blur)="setEditable(false)" [(ngModel)]='node.text'> </span>
  <span *ngIf='!isEditable' (click)='setEditable(true)'> {{node.text}} </span>
  `
})
export class XEditableText {
  @Input() node;
  isEditable:boolean;
  constructor() {}
  setEditable (isEditable){
    this.isEditable = isEditable;
  }

  ngOnInit(){
    this.isEditable = false;
  }
}

