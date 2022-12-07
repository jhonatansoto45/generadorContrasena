import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
