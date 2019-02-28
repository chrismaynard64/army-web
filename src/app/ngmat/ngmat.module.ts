import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule, 
  MatCheckbox, MatCheckboxModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  declarations: [],
  exports: [MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, 
    MatToolbarModule, MatCheckboxModule, MatExpansionModule]
})
export class NgMatModule { }

