import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 
  {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCardModule,
    MatDialogModule, 
    MatInputModule,
    MatListModule,
    MatMenuModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatDialogModule, 
    MatInputModule,
    MatListModule, 
    MatIconModule, 
    MatMenuModule,
    MatSidenavModule, 
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }