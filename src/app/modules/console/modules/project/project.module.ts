import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProjectApisComponent } from './components/project-apis/project-apis.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectSettingsComponent } from './components/project-settings/project-settings.component';
import { CreateProjectApiComponent } from './components/project-apis/components/create-project-api/create-project-api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project/project.service';
import { WorkingProjectService } from '../../services/project/working-project.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ProjectApiService } from './services/project-api/project-api.service';


@NgModule({
  declarations: [
    MainComponent,
    ProjectApisComponent,
    ProjectDashboardComponent,
    ProjectSettingsComponent,
    CreateProjectApiComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService,
    WorkingProjectService,
    HttpService,
    ProjectApiService
  ]
})
export class ProjectModule { }
