import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLatComponent } from './menu-lat/menu-lat.component';
import { ContentComponent } from './content/content.component';
import { MenuSupComponent } from './menu-sup/menu-sup.component';
import { PipeFechaNacPipe } from './pipe-fecha-nac.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MenuLatComponent,
    ContentComponent,
    MenuSupComponent,
    PipeFechaNacPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
