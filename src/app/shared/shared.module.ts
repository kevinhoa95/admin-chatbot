import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';
import { SharedUiService } from './shared-ui.service';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  NgbModule,
  HttpClientModule
];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

const COMPONENT = [];

@NgModule({
  declarations: [...COMPONENT],
  imports: [...BASE_MODULES, ...MAT_MODULES],
  exports: [...BASE_MODULES, ...MAT_MODULES, ...COMPONENT],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        SharedService,
        SharedUiService,
        NgbTooltipConfig,
      ]
    };
  }
}
