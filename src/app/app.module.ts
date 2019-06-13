import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CovalentLayoutModule,
    CovalentDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
