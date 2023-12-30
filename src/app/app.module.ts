import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './pages/list/list.component';
import { RoundedInputComponent } from './components/rounded-input/rounded-input.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ButtonComponent } from './components/button/button.component';

import { HttpRequestsService } from './services/httpRequests/http-requests.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    RoundedInputComponent,
    HeaderComponent,
    DropDownListComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    HttpRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
