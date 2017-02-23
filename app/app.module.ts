import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TenPints } from './tenpints.component';
import { PricyPipe } from './pricy.pipe';
import { Description } from './description.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TenPints,
    PricyPipe,
    Description
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
