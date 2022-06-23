import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {IEmployee} from "../../../../shared/interfaces/employee.interface";
import {MenuItem} from "primeng/api";
import {IVirtualCV} from "../../../../shared/interfaces/virtual-cv.interface";


@Component({
  selector: 'app-employees-edit-page',
  templateUrl: './employees-edit-page.component.html',
  styleUrls: ['./employees-edit-page.component.css']
})
export class EmployeesEditPageComponent implements OnInit, OnChanges {

  @Input()
  public employee!: IEmployee;
  @Input()
  public virtualCV: IVirtualCV[];

  public menu: MenuItem[];
  public infoOrCV: boolean = false;

  public usersVirtualCV: IVirtualCV[];
  public selectedCV: IVirtualCV;

  @Output()
  public editEmployee = new EventEmitter<IEmployee>();

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {label: 'Info'},
      {label: 'CV'}
    ];
    this.usersVirtualCV = this.mapCVtoMenu(this.virtualCV, this.employee.id);
    this.selectedCV = this.usersVirtualCV[0]
  }

  save(employee: IEmployee) {
    this.editEmployee.emit(employee);
  }

  selectMenu() {
    this.infoOrCV = !this.infoOrCV
  }

  mapCVtoMenu(virtualCV: IVirtualCV[], id: string): IVirtualCV[] {
    let CVs: IVirtualCV[] = virtualCV.filter(item => item.user === id);
    console.log(id)
    console.log(CVs);
    return CVs;
  }

  delete(id: number) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['selectedCV']?.currentValue;
    if(change) {
      console.log(change)
    }
  }



}
