import {Injectable} from '@angular/core';
import {ProjectRestService} from "../../restService/project/project.rest.service";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private projectRestService: ProjectRestService,) {
  }

  addProject(projectOverview: ProjectOverview) {
    return this.projectRestService.addProject(projectOverview);
  }

  deleteProject(projectId: string): Observable<any> {
    //TODO: integrate delete project api
    return this.projectRestService.deleteProject(projectId);
  }

  getAllProject(): Observable<any> {
    return this.projectRestService.getAllProject();
  }

  getSingleProject(): Observable<any> {
    return this.projectRestService.getSingleProject();
  }

}
