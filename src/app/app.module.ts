import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {AppSharedModule} from "./shared/app-shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {RestService} from "./shared/rest.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataEditModule} from "./data-edit/data-edit.module";
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ToastModule, ToastOptions} from "ng2-toastr";
import {CustomOption} from "./toastr/custom-option";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedModule,
    AppRoutingModule,
    DataEditModule,
    ToastModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [
    FormBuilder,
    RestService,
    {provide: ToastOptions, useClass: CustomOption}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
