import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentLayoutModule,
    CovalentDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
