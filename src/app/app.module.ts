import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms'; // <-- NgModel vive aca

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule // <-- importar el FormsModule antes del binding con [(ngModel)]
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
