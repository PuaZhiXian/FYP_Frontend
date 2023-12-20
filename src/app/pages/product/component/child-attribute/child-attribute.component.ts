import {Component, Input, OnInit} from '@angular/core';
import {IApiDocumentationObject} from "../../../../interface/api-collection/i-api-documentation-object";

@Component({
  selector: 'child-attribute',
  templateUrl: './child-attribute.component.html',
  styleUrls: ['./child-attribute.component.scss']
})
export class ChildAttributeComponent implements OnInit {

  @Input() title: string = '';
  @Input() childObject: IApiDocumentationObject[] = [];
  @Input() isEnum: boolean = false;
  closeChild: boolean = true;


  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCloseChild() {
    this.closeChild = !this.closeChild;
  }
}
