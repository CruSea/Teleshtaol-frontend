import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';


// Components Routing


import { TestimonyComponent } from './testimony.component';
import { TestimonyRoutingModule } from './testimony-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ModalModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../auth.service";
import {HttpService} from "../../http.service";
import {TestimonyService} from "./services/testimony.service";
import {DisapprovedService} from "./services/disapproved.service";
import { DisapprovedComponent } from './disapproved.component';
import { ApprovedService } from './services/approved.service';
import { ApprovedComponent } from './approved.component';


@NgModule({
  imports: [
    TestimonyRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule,
    // PopupModule.forRoot()
  ],
  declarations: [TestimonyComponent, DisapprovedComponent, ApprovedComponent,  FilterPipe ],
  providers:[ApprovedService, DisapprovedService, TestimonyService, AuthService, HttpService]
})
export class TestimonyModule { }
