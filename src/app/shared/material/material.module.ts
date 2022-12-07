import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  exports: [MatCheckboxModule, MatInputModule, MatIconModule, MatSliderModule],
})
export class MaterialModule {}
