import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerateService {

  constructor() {}

  passwordCreator(characters: number, encryptStr: string) {
    const charactersLength = encryptStr.length;
    let result = '';
    for (let i = 0; i < characters; i++) {
      result += encryptStr.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
