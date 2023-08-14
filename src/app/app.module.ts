import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // importamos este modulo para hacer uso de las rutas
    AppRoutingModule,
    // modulos que se tienen los elementos que vamos a usar 
    PaisModule,
    SharedModule,
    // modulo para hacer las peticiones
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
