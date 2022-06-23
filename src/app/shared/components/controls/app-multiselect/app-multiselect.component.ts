import {Component, Input} from '@angular/core';
import {BaseControl} from "../../../classes/base-control.class";

@Component({
  selector: 'app-app-multiselect',
  templateUrl: './app-multiselect.component.html',
  styleUrls: ['./app-multiselect.component.css']
})
export class AppMultiselectComponent extends BaseControl{

  @Input()
  public options: any[];
  @Input()
  public optionValueField: string;
  @Input()
  public optionLabelField: string;
}

