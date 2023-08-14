import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // importamos el routermodule para poder hacer uso de los [routerLink] dentro de estos componentes
    RouterModule
  ]
})
export class SharedModule { }
