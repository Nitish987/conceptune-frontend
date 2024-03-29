import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Api } from 'src/app/models/api';
import { HttpService } from 'src/app/services/http/http.service';
import { ResponseCollector } from 'src/app/utils/response-collector';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {
  private projectApiList$ = new BehaviorSubject<Api[]>([]);
  private projectApiList: Api[] = [];

  constructor(private http: HttpService) { }

  get getProjectApis$() {
    return this.projectApiList$;
  }

  private setProjectApis(projectApis: Api[]) {
    this.projectApiList = projectApis;
    this.projectApiList$.next(this.projectApiList);
  }

  private appendProjectApi(projectApi: Api) {
    this.projectApiList.push(projectApi);
    this.projectApiList$.next(this.projectApiList);
  }

  private deleteProjectApi(projectApiId: number) {
    this.projectApiList = this.projectApiList.filter(pa => pa.id !== projectApiId);
    this.projectApiList$.next(this.projectApiList);
  }

  createApi(projectId: string, product: string, type: string) {
    return this.http.post(`/apis/v1/project-api/${projectId}/`, {
      product: product,
      type: type
    }).pipe(map(res => {
      try {
        const collector = new ResponseCollector(res);
        if (collector.success()) {
          this.appendProjectApi(collector.data()['projectapi']);
        }
        return collector;
      } catch(e) {
        return ResponseCollector.localErrorResponse();
      }
    }));
  }

  listApis(projectId: string) {
    return this.http.get(`/apis/v1/project-api/${projectId}/`).pipe(map(res => {
      try {
        const collector = new ResponseCollector(res);
        if (collector.success()) {
          this.setProjectApis(collector.data()['projectapis']);
        }
        return collector;
      } catch(e) {
        return ResponseCollector.localErrorResponse();
      }
    }));
  }

  viewApi(projectId: string, projectApiId: number) {
    return this.http.get(`/apis/v1/project-api/${projectId}/view/?id=${projectApiId}`).pipe(map(res => {
      try {
        return new ResponseCollector(res);
      } catch(e) {
        return ResponseCollector.localErrorResponse();
      }
    }));
  }

  deleteApi(projectId: string, projectApiId: number) {
    return this.http.delete(`/apis/v1/project-api/${projectId}/?id=${projectApiId}`).pipe(map(res => {
      try {
        const collector = new ResponseCollector(res);
        if (collector.success()) {
          this.deleteProjectApi(projectApiId);
        }
        return collector;
      } catch(e) {
        return ResponseCollector.localErrorResponse();
      }
    }));
  }
}
