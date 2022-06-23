import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit {

  @Input() objects: any[];
  @Input() cols: any[];
  @Output() public edit = new EventEmitter<any>();

  first: number = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  reset() {
    this.first = 0;
  }

  editRow(row: any) {
    this.edit.emit(row);
  }
}
