import { CoreModule } from './../../core/core.module';

import { MaterialModule } from '@/material/material.module';
import { InfoComponent } from './info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class InfoModule { }
