import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './pages/list/list.component';
import { RoundedInputComponent } from './components/rounded-input/rounded-input.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    RoundedInputComponent,
    HeaderComponent,
    DropDownListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
