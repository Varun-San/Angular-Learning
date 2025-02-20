import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ControlStatementComponent } from './control-statement/control-statement.component';
import { SignalComponent } from './signal/signal.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './API/get-api/get-api.component';
import { PostApiComponent } from './API/post-api/post-api.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { CustomerComponent } from './API/customer/customer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent,
  },

  {
    path: 'ng-Class',
    component: NgClassComponent,
  },
  {
    path: 'ng-For',
    component: NgForComponent,
  },
  {
    path: 'ng-If',
    component: NgIfComponent,
  },
  {
    path: 'ng-Style',
    component: NgStyleComponent,
  },
  {
    path: 'controlstatement',
    component: ControlStatementComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'linked-signal',
    component: LinkedSignalComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'get-api',
    component: GetApiComponent,
  },
  {
    path: 'post-api',
    component: PostApiComponent,
  },
  {
    path: 'resource-api',
    component: ResourceApiComponent,
  },
  {
    path: 'customer-api',
    component: CustomerComponent,
  },
];
