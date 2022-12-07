import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TypeCharacters } from '../interfaces/generate.interface';
import { GenerateService } from '../shared/services/generate.service';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss'],
})
export class GeneratePasswordComponent implements OnInit {
  readonly mayusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  readonly minusculas: string = 'abcdefghijklmnopqrstuvwxyz';
  readonly numeros: string = '0123456789';
  readonly simbolos: string = '#!$%&?¡¿*-';

  readonly max: number = 100;
  readonly min: number = 0;
  readonly step: number = 1;

  valueSlider: number = 0;
  isMayuscula: boolean = false;
  isMinuscula: boolean = false;
  isNumero: boolean = false;
  isSimbolo: boolean = false;

  defaultCharacter: string = '';
  viewPassword: string = '';

  constructor(
    private generateService: GenerateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  get type() {
    return TypeCharacters;
  }

  copy() {
    console.log('copy');
  }

  validateState(item: boolean, typeEncrypt: TypeCharacters): void {
    switch (typeEncrypt) {
      case this.type.mayus:
        item
          ? (this.defaultCharacter = this.defaultCharacter.concat(
              this.mayusculas
            ))
          : (this.defaultCharacter = this.defaultCharacter.replace(this.mayusculas, ''));
        break;
      case this.type.minus:
        item
          ? (this.defaultCharacter = this.defaultCharacter.concat(
              this.minusculas
            ))
          : (this.defaultCharacter = this.defaultCharacter.replace(this.minusculas, ''));
        break;
      case this.type.numeros:
        item
          ? (this.defaultCharacter = this.defaultCharacter.concat(this.numeros))
          : (this.defaultCharacter =this.defaultCharacter.replace(this.numeros, ''));
        break;
      case this.type.simbolos:
        item
          ? (this.defaultCharacter = this.defaultCharacter.concat(
              this.simbolos
            ))
          : (this.defaultCharacter = this.defaultCharacter.replace(this.simbolos, ''));
        break;
    }
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

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
