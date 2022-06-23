import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BaseControl} from "../../../classes/base-control.class";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-app-textarea',
  templateUrl: './app-textarea.component.html',
  styleUrls: ['./app-textarea.component.css']
})
export class AppTextareaComponent extends BaseControl{

}
