import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customers',
    children: [
      {
        path: '',
        component: CustomersComponent,
      },
      {
        path: 'add',
        component: AddCustomersComponent,
      },
    ],
  },
  // { path: 'addcustomers', component: AddCustomersComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
