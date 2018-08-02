import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader
} from './components';





const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {HttpModule} from "@angular/http";
import {DashboardModule} from "./views/dashboard/dashboard.module";
import {ComponentsModule} from "./views/components/components.module";
import {ComponentsRoutingModule} from "./views/components/components-routing.module";
import {TestimonyModule} from "./views/testimony/testimony.module";
import {TestimonyRoutingModule} from "./views/testimony/testimony-routing.module";
import {LoginModule} from "./views/login/login.module";
import {LoginRoutingModule} from "./views/login/login-routing.module";
import { HttpService } from 'app/http.service';
import { TestimonyComponent } from './views/testimony/testimony.component';
import { UsersComponent } from './views/users/users.component';
import { AuthGuard } from './auth.guard';
// import { AdminGuard } from './admin.guard';
// import { TestimonyComponent } from './views/testimony/testimony.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    ComponentsModule,
    TestimonyModule,
    ComponentsRoutingModule,
    LoginModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    UsersComponent,
    

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,

  },  AuthService, HttpService,  AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
