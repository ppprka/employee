import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent {

  @Input()
  public objects: any[];
  @Input()
  public cols: any[];
  @Output()
  public edit = new EventEmitter<any>();
  public first: number = 0;

  constructor(private router: Router) {
  }

  public reset(): void {
    this.first = 0;
  }

  public editRow(row: any): void {
    this.edit.emit(row);
  }
}
