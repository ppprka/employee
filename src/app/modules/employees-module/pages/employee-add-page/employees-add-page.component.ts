import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../../../shared/interfaces/employee.interface";
import {Observable} from "rxjs";
import {IVirtualCV} from "../../../../shared/interfaces/virtual-cv.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {getVirtualCV} from "../../../../state/virual-cv/virtual-cv.actions";
import {selectAllVirtualCV} from "../../../../state/virual-cv/virtual-cv.selector";

@Component({
  selector: 'app-employees-add-page',
  templateUrl: './employees-add-page.component.html',
  styleUrls: ['./employees-add-page.component.css']
})
export class EmployeesAddPageComponent implements OnInit {


  @Input()
  public employee: IEmployee;



  constructor() { }

  ngOnInit(): void {

  }

}
