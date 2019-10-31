import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsComponent } from './component/forms/forms.component';
import { TableComponent } from './component/tables/selection-table/table.component';
import { BasicTableComponent } from './component/tables/basic-table/basic-table.component';
import { SortingTableComponent } from './component/tables/sorting-table/sorting-table.component';
import { FilterTableComponent } from './component/tables/filter-table/filter-table.component';
import { LoginComponent } from './template/login/login.component';
import { SignupComponent } from './template/signup/signup.component';
import { CardComponent } from './component/card/card.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { BottomSheetComponent } from './component/modal-popup/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './component/modal-popup/dialog/dialog.component';
import { SnackbarComponent } from './component/modal-popup/snackbar/snackbar.component';
import { ButtonComponent } from './component/buttons/button/button.component';
import { CollapseComponent } from './component/collapse/collapse.component';
import { ListComponent } from './component/list/list.component';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { MenuButtonComponent } from './component/menu/menu-button/menu-button.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { TabComponent } from './component/tab/tab.component';
import { Error404Component } from './component/error/error404/error404.component';
import { Error505Component } from './component/error/error505/error505.component';
import { JumbotronComponent } from './component/jumbotron/jumbotron.component';
import { InvoiceComponent } from './component/invoice/invoice.component';


const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'forms' , component: FormsComponent},
  {path: 'selection-table' , component: TableComponent},
  {path: 'basic-table', component:BasicTableComponent},
  {path: 'sorting-table',component:SortingTableComponent},
  {path:'filter-table',component:FilterTableComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'card',component:CardComponent},
  {path:'stepper',component:StepperComponent},
  {path:'bottomsheet',component:BottomSheetComponent},
  {path:'dialog',component:DialogComponent},
  {path:'snackbar',component:SnackbarComponent},
  {path:'button',component:ButtonComponent},
  {path:'collapse',component:CollapseComponent},
  {path:'list',component:ListComponent},
  {path:'date-picker',component:DatepickerComponent},
  {path:'menu-button',component:MenuButtonComponent},
  {path:'breadcrumb',component:BreadcrumbComponent},
  {path:'tab',component:TabComponent},
  {path:'error404',component:Error404Component},
  {path:'error505',component:Error505Component},
  {path:'jumbotron',component:JumbotronComponent},
  {path:'invoice',component:InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }