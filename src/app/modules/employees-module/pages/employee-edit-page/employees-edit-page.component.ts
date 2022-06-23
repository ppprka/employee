import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';

import {IEmployee} from "../../../../shared/interfaces/employee.interface";
import {MenuItem} from "primeng/api";
import {IVirtualCV} from "../../../../shared/interfaces/virtual-cv.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {getUsersVirtualCV, updateVirtualCV} from "../../../../state/virual-cv/virtual-cv.actions";
import {Observable, switchMap} from "rxjs";
import {selectUsersVirtualCV} from "../../../../state/virual-cv/virtual-cv.selector";
import {getEmployee} from "../../../../state/employee/employee.actions";
import {selectEmployee} from "../../../../state/employee/employee.selector";
import {
  IProject,
  IProjectCV,
  IProjectRoleName,
  IResponsibilityName
} from "../../../../shared/interfaces/project.interface";
import {getProjects} from "../../../../state/project/project.actions";
import {selectAllProjects} from "../../../../state/project/project.selector";
import {ProjectFormComponent} from "../../../../shared/components/project-form/project-form.component";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


@Component({
  selector: 'app-employees-edit-page',
  templateUrl: './employees-edit-page.component.html',
  styleUrls: ['./employees-edit-page.component.css']
})
export class EmployeesEditPageComponent implements OnInit, OnChanges {

  public menu: MenuItem[];
  public infoOrCV: boolean = false;
  public selectedCV: IVirtualCV;
  public id: string;
  public ready: boolean = false;
  public virtualCV!: IVirtualCV[];
  public employee!: IEmployee;
  public projects$: Observable<IProject[]>;
  public projectToAdd: IProject;
  public newProject: IProjectCV;
  @ViewChildren(ProjectFormComponent)
  private counterComponent: QueryList<ProjectFormComponent>;
  @ViewChild('cvBlock')
  private cvBlock: ElementRef;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
    this.menu = [
      {label: 'Info'},
      {label: 'CV'}

    ];
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => {
      this.id = data;
    });
  }


  ngOnInit(): void {
    this.store.dispatch(getEmployee({id: this.id.toString()}))
    this.store.select(selectEmployee).subscribe(
      data => {
        this.employee = data
        this.changeBreadCrumb()
      }
    );
    this.store.dispatch(getUsersVirtualCV({id: this.id.toString()}));
    this.store.select(selectUsersVirtualCV).subscribe(
      cvs => {
        this.virtualCV = cvs;
        this.selectedCV = cvs[0];
        this.ready = true;
      });
    this.store.dispatch(getProjects());
    this.projects$ = this.store.select(selectAllProjects)

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && changes['employee'].currentValue) {
      this.employee = changes['employee'].currentValue
    }
  }

  public selectMenu(): void {
    this.infoOrCV = !this.infoOrCV
  }

  public addProject(project: IProject): void {
    let newProject = this.provideNewProject();
    newProject.description = project.description;
    newProject.endDate = project.endDate;
    newProject.id = project.id;
    newProject.name = project.name;
    newProject.secondName = project.secondName;
    newProject.startDate = project.startDate
    newProject.tasksPerformed = project.tasksPerformed;
    newProject.teamSize = project.teamSize;
    newProject.projectRoles = project.projectRoles.map<IProjectRoleName>(item => {
      return {name: item.name}
    })
    newProject.responsibilities = project.responsibilities.map<IResponsibilityName>(item => {
      return {name: item.name}
    })
    newProject.specializations = project.specializations.map(item => item.name);
    const newSelectedCV = JSON.parse(JSON.stringify(this.selectedCV));
    newSelectedCV.data.projects.push(newProject)
    this.selectedCV = newSelectedCV;
    this.newProject = newProject;
  }

  public addCV(): void {
    let newCV = this.newVirtualCVProvider();
    const newVirtualCV = JSON.parse(JSON.stringify(this.virtualCV));
    newVirtualCV.push(newCV)
    this.virtualCV = newVirtualCV;
    this.selectedCV = this.virtualCV[length]
  }

  public saveVirtualCV(): void {
    let projects: IProjectCV[] = [];
    this.counterComponent.forEach(item => {projects.push(item.projectForm.getRawValue())});
    this.selectedCV.data.projects = projects;
    this.store.dispatch(updateVirtualCV({virtualCV: this.selectedCV}))
  }

  public cancelVirtualCV(): void {
    this.router.navigate(["/employees"]);
  }

  public delete(id: string): void {
    this.virtualCV = this.virtualCV.filter(item => item.id !== id);
    //request to delete cv
  }

  public saveEmployee(id: any): void {}

  private provideNewProject(): IProjectCV {
    return {
      description: '',
      endDate: new Date(),
      id: '',
      name: '',
      projectRoles: [],
      responsibilities: [],
      secondName: '',
      specializations: [],
      startDate: new Date(),
      tasksPerformed: '',
      teamSize: null,
    };
  }

  private newVirtualCVProvider(): IVirtualCV {
    return {
      id: '',
      name: '',
      user: this.employee.id,
      data: {
        education: {
          establishment: '',
          profession: '',
        },
        foreignLanguage: [],
        projects: []
      },
      general: {
        firstName: '',
        lastName: '',
        name: ''
      },
      resume: {
        content: ''
      },
      skills: [{
        skillType: '',
        skillsOfType: [{
          skillName: '',
          experienceYears: null,
          level: '',
          lastUsedYear: null
        }]
      }]
    };
  }

  public changeBreadCrumb(): void {
    let crumb = document?.getElementById(' ');
    if (crumb) {
      crumb.innerHTML = `${this?.employee.firstName} ${this?.employee.lastName}`
    }

  }

  public generatePDF(cv: IVirtualCV): void {

    html2canvas(this.cvBlock.nativeElement, { scale: 1}).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth ) / canvas.width;
      let PDF = new jsPDF('p', 'mm', [210, generatedImageHeight],);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 8, 0, fileWidth, generatedImageHeight,);
      PDF.html(this.cvBlock.nativeElement)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
    window.location.reload();
  }
}
