
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopbarMenuComponent } from './topbar-menu/topbar-menu.component';

@NgModule({
  declarations: [
    TopbarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MaterialModule
  ],
  exports: [
    TopbarMenuComponent
  ]
})
export class LayoutModule { }
