import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthService } from './../../auth.service';
import { HttpService } from './../../http.service';
import { DashboardService } from './services/dashboard.service';
@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent ],
  providers: [ AuthService , HttpService, DashboardService ]

})
export class DashboardModule { }
 