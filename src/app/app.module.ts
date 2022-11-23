import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLatComponent } from './menu-lat/menu-lat.component';
import { ContentComponent } from './content/content.component';
import { MenuSupComponent } from './menu-sup/menu-sup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLatComponent,
    ContentComponent,
    MenuSupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
