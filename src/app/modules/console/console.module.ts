import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { MainComponent } from './components/main/main.component';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectComponent } from './components/project/project.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BillingComponent } from './components/billing/billing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilePicChangeComponent } from './components/settings/components/profile-pic-change/profile-pic-change.component';
import { EmailChangeComponent } from './components/settings/components/email-change/email-change.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    ProjectComponent,
    SettingsComponent,
    BillingComponent,
    DashboardComponent,
    ProfilePicChangeComponent,
    EmailChangeComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ],
  providers: [AuthorizationService]
})
export class ConsoleModule { }
