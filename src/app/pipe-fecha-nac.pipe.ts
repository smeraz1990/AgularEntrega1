import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFechaNac'
})
export class PipeFechaNacPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let nuevoValue = value.replaceAll("/","-")
    return nuevoValue;
  }

}
