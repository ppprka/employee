import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../../../environments/environment";
import {DASHBOARD_ROUTE, EMPLOYEES_ROUTE, PROJECT_ROUTE} from "../../shared/constants/routing-path.const";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

public items: MenuItem[];
public navbar: MenuItem[];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit () {
    this.translateService.use(environment.defaultLocale)
    this.items = [{
      items: [
        {label: 'Dashboard', icon: 'pi pi-chart-pie', routerLink: DASHBOARD_ROUTE.path, routerLinkActiveOptions: "active"},
        {label: 'Employees', icon: 'pi pi-pencil', routerLink: EMPLOYEES_ROUTE.path, routerLinkActiveOptions: "active"},
        {label: 'Projects', icon: 'pi pi-home', routerLink: PROJECT_ROUTE.path, routerLinkActiveOptions: "active"}
      ]
    }];
    this.navbar = [
      {

        label: 'Ant Design',
      },
      {
        styleClass: 'icon-search',
        icon: 'pi pi-search pi-fw'
      },
      {
        icon: 'pi pi-question-circle pi-fw'
      },
      {

        icon: 'pi pi-bell pi-fw'
      },
      {
        label: `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`,
        icon: 'pi pi-user pi-fw'

      },
      {
        icon: 'pi pi-globe pi-fw'
      }
    ]
  }
}
