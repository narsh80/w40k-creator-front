import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CalendarModule, ConfirmationService, ConfirmDialogModule, DataListModule, DataTableModule, DialogModule, DropdownModule, InputTextModule, MenubarModule, SharedModule, SpinnerModule} from "primeng/primeng";
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
    providers: [ConfirmationService],
    declarations: [
        MyInhertLink
    ],
    exports: [FormsModule,
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
export class AppSharedModule {
}
