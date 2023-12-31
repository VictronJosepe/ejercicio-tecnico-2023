import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

import { GridComponent } from './components/grid/grid.component';
import { RoundedInputComponent } from './components/rounded-input/rounded-input.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ButtonComponent } from './components/button/button.component';
import { ExpandableMenuComponent } from './components/expandable-menu/expandable-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    RoundedInputComponent,
    HeaderComponent,
    DropDownListComponent,
    ButtonComponent,
    ExpandableMenuComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
