import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsComponent } from './component/forms/forms.component';
import { TableComponent } from './component/tables/selection-table/table.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BasicTableComponent } from './component/tables/basic-table/basic-table.component';
import { SortingTableComponent } from './component/tables/sorting-table/sorting-table.component';
import { FilterTableComponent } from './component/tables/filter-table/filter-table.component';
import { LoginComponent } from './template/login/login.component';
import { SignupComponent } from './template/signup/signup.component';
import { CardComponent } from './component/card/card.component';
import { ExpansionPanelComponent } from './component/expansion-panel/expansion-panel.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { BottomSheetComponent, SheetDialog } from './component/modal-popup/bottom-sheet/bottom-sheet.component';
import { DialogComponent,DialogContentExampleDialog} from './component/modal-popup/dialog/dialog.component';
import { SnackbarComponent } from './component/modal-popup/snackbar/snackbar.component';
import { ButtonComponent } from './component/buttons/button/button.component';
import { CollapseComponent } from './component/collapse/collapse.component';
import { ListComponent } from './component/list/list.component';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { MenuButtonComponent } from './component/menu/menu-button/menu-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { TabComponent } from './component/tab/tab.component';
import { Error404Component } from './component/error/error404/error404.component';
import { Error505Component } from './component/error/error505/error505.component';
import { JumbotronComponent } from './component/jumbotron/jumbotron.component';
import { DemoMaterialModule } from './materialcomponent';
import { InvoiceComponent } from './component/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormsComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    BasicTableComponent,
    SortingTableComponent,
    FilterTableComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    ExpansionPanelComponent,
    StepperComponent,
    BottomSheetComponent,
    DialogComponent,
    SnackbarComponent,
    SheetDialog,
    ButtonComponent,
    CollapseComponent,
    ListComponent,
    DatepickerComponent,
    MenuButtonComponent,
    BreadcrumbComponent,
    TabComponent,
    Error404Component,
    Error505Component,
    JumbotronComponent,
    DialogContentExampleDialog,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule

  ],
  entryComponents: [DialogContentExampleDialog,SheetDialog],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
