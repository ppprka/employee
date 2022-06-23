import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BaseControl} from "../../../classes/base-control.class";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent extends BaseControl {

}
