import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColorLevel, TypeCharacters } from '../interfaces/generate.interface';
import { GenerateService } from '../shared/services/generate.service';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss'],
})
export class GeneratePasswordComponent implements OnInit {
  //* TIPOS
  readonly mayusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  readonly minusculas: string = 'abcdefghijklmnopqrstuvwxyz';
  readonly numeros: string = '0123456789';
  readonly simbolos: string = '#!$%&?¡¿*-';
  //* SLIDER
  readonly max: number = 100;
  readonly min: number = 0;
  readonly step: number = 1;
  valueSlider: number = 12;
  //* CHECKBOX
  isMayuscula: boolean = true;
  isMinuscula: boolean = true;
  isNumero: boolean = true;
  isSimbolo: boolean = true;
  //* INPUT
  defaultCharacter: string =
    this.mayusculas + this.numeros + this.numeros + this.simbolos;
  viewPassword: string = '';
  levelPassword: string = '';
  colorLevelIcon: string = '';

  constructor(
    private generateService: GenerateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.generatePassword();
    this.stateLevelPassword();
  }

  get type() {
    return TypeCharacters;
  }
  //* VALIDACIONES DE NIVEL DE CONTRASEÑA
  get levelGoodPassword(): boolean {
    return (
      this.isMayuscula &&
      this.isMinuscula &&
      this.isNumero &&
      this.isSimbolo &&
      this.valueSlider > 10
    );
  }

  get levelHalfPassword(): boolean {
    return (
      (this.isMayuscula && this.isNumero) ||
      this.isSimbolo ||
      this.valueSlider > 10
    );
  }

  onValueSliderChange(): void {
    this.stateLevelPassword();
  }

  copy(): void {
    console.log('copy');
  }

  validateState(item: boolean, typeEncrypt: TypeCharacters): void {
    switch (typeEncrypt) {
      case this.type.mayus:
        this.assignEncryption(item, this.mayusculas);
        break;
      case this.type.minus:
        this.assignEncryption(item, this.minusculas);
        break;
      case this.type.numeros:
        this.assignEncryption(item, this.numeros);
        break;
      case this.type.simbolos:
        this.assignEncryption(item, this.simbolos);
        break;
    }

    this.stateLevelPassword();
  }

  generatePassword(): void {
    if (this.valueSlider === 0)
      this.openSnackBar(
        'Debe escoger la longitud de la contraseña.',
        'Aceptar'
      );

    this.viewPassword = this.generateService.passwordCreator(
      this.valueSlider,
      this.defaultCharacter
    );
  }

  private stateLevelPassword(): void {
    if (this.levelGoodPassword) {
      this.levelPassword = 'Buena';
      this.colorLevelIcon = ColorLevel.good;
    } else if (this.levelHalfPassword) {
      this.levelPassword = 'Media';
      this.colorLevelIcon = ColorLevel.half;
    } else {
      this.levelPassword = 'Mala';
      this.colorLevelIcon = ColorLevel.bad;
    }
  }

  private assignEncryption(checkbox: boolean, type: string): void {
    checkbox
      ? (this.defaultCharacter = this.defaultCharacter.concat(type))
      : (this.defaultCharacter = this.defaultCharacter.replace(type, ''));
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }
}
