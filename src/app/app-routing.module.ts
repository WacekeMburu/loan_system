import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ManageLoansComponent } from './loans/manage-loans/manage-loans.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { ManageCustomersComponent } from './customers/manage-customers/manage-customers.component';
import { AddLoansComponent } from './loans/add-loans/add-loans.component';
import { LoansComponent } from './loans/loans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full'},
{path: 'customers', component: CustomersComponent},
{path: 'add-customers', component: AddCustomersComponent},
{path: 'manage-customers', component: ManageCustomersComponent},
{path: 'loans', component: LoansComponent},
{path: 'manage-loans', component: ManageLoansComponent},
{path: 'add-loans', component: AddLoansComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
