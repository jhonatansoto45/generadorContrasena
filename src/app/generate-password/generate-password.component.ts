import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss'],
})
export class GeneratePasswordComponent implements OnInit {
  max: number = 100;
  min: number = 0;
  step: number = 1;
  valueSlider: number = 0;

  constructor() {}

  ngOnInit(): void {}

  copy() {
    console.log('copy');
  }
}
