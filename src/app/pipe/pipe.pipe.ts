import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=="price")
      return value+"₪"
      if(args=="additives")
      return value+"👍"
    if(args=="numOfBeds")
      return value+"🛏️"
 
    
  }

}
