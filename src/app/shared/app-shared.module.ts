import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  CalendarModule, InputTextModule, SpinnerModule, DataListModule, MenubarModule,
  DataTableModule, SharedModule, ConfirmDialogModule, ConfirmationService, DialogModule, DropdownModule
} from 'primeng/primeng';
import {MyInhertLink} from "./directives/my.inner.links.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InputTextModule,
    SpinnerModule,
    DataListModule,
    DataTableModule,
    SharedModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    CalendarModule
  ],
  providers:[ConfirmationService],
  declarations: [
    MyInhertLink
  ],
  exports:[FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InputTextModule,
    SpinnerModule,
    DataListModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    MenubarModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    MyInhertLink
  ]
})
export class AppSharedModule { }
