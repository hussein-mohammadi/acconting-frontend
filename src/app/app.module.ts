import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncomeListComponent } from './pages/income/income-list/income-list.component';
import { IncomeCreateComponent } from './pages/income/income-create/income-create.component';
import { IncomeEditComponent } from './pages/income/income-edit/income-edit.component';
import { CostListComponent } from './pages/cost/cost-list/cost-list.component';
import { CostCreateComponent } from './pages/cost/cost-create/cost-create.component';
import { CostEditComponent } from './pages/cost/cost-edit/cost-edit.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { IncomeComponent } from './pages/income/income.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CostComponent } from './pages/cost/cost.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IncomeListComponent,
    IncomeCreateComponent,
    IncomeEditComponent,
    CostListComponent,
    CostCreateComponent,
    CostEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    IncomeComponent,
    EmployeeComponent,
    CostComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
