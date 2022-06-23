import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {BaseControl} from "../../../classes/base-control.class";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.css']
})
export class AppDatepickerComponent extends BaseControl {

}
