import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule, 
  MatRadioModule, MatCheckboxModule, MatExpansionModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [],
  exports: [MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, 
    MatToolbarModule, MatCheckboxModule, MatExpansionModule, MatSelectModule,
    MatRadioModule]
})
export class NgMatModule { }

