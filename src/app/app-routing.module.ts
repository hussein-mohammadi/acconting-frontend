import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncomeComponent } from './pages/income/income.component';
import { IncomeListComponent } from './pages/income/income-list/income-list.component';
import { IncomeCreateComponent } from './pages/income/income-create/income-create.component';
import { IncomeEditComponent } from './pages/income/income-edit/income-edit.component';
import { CostComponent } from './pages/cost/cost.component';
import { CostListComponent } from './pages/cost/cost-list/cost-list.component';
import { CostCreateComponent } from './pages/cost/cost-create/cost-create.component';
import { CostEditComponent } from './pages/cost/cost-edit/cost-edit.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
    title: 'پیشخوان',
  },
  { 
    path: 'income',
    component: IncomeComponent,
    children: [
      {
        path: '',
        component: IncomeListComponent,
        pathMatch: 'full',
        title: 'درآمدها'
      },
      {
        path: 'create',
        component: IncomeCreateComponent,
        title: 'افزودن درآمد',
      },
      {
        path: 'edit/:id',
        component: IncomeEditComponent,
        title: 'ویرایش درآمد',
      },
    ]
  },
  { 
    path: 'cost',
    component: CostComponent,
    children: [
      {
        path: '',
        component: CostListComponent,
        pathMatch: 'full',
        title: 'مخارج'
      },
      {
        path: 'create',
        component: CostCreateComponent,
        title: 'افزودن خرج کرد',
      },
      {
        path: 'edit/:id',
        component: CostEditComponent,
        title: 'ویرایش خرج کرد',
      },
    ]
  },
  { path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        pathMatch: 'full',
        title: 'کارمندان'
      }
    ]
  },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }