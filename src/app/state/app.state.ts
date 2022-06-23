import {ProjectState} from "./project/project.reducer";
import {ProjectRolesState} from "./project-roles/project-roles.reducer";
import {ResponsibilitiesState} from "./responsibilities/responsibilities.reducer";
import {SpecializationState} from "./specializations/specialization.reducer";
import {EmployeeState} from "./employee/employee.reducer";
import {VirtualCVState} from "./virual-cv/virtual-cv.reducer";

export interface AppState {
  projects: ProjectState;
  projectRoles: ProjectRolesState;
  responsibilities: ResponsibilitiesState;
  specializations: SpecializationState;
  employees: EmployeeState;
  virtualCV: VirtualCVState;
}
