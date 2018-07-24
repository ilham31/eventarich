import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConvert',
})

export class DateConvertPipe implements PipeTransform {
  trans : any;

  transform(value: any, args: any): any {
    if(!value) return value;
    switch(value) {
      case '01': { 
        this.trans = 'JAN';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '02': { 
        this.trans = 'FEB';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '03': { 
        this.trans = 'MAR';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '04': { 
        this.trans = 'APR';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '05': { 
        this.trans = 'MAY';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '06': { 
        this.trans = 'JUN';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '07': { 
        this.trans = 'JUL';
        console.log('aw', this.trans);
        return this.trans;
      } 
      case '08': { 
        this.trans = 'AUG';
        console.log('aw', this.trans);
        return this.trans;
      }
      case '09': { 
        this.trans = 'SEP';
        console.log('aw', this.trans);
        return this.trans;
      }
      case '10': { 
        this.trans = 'OCT';
        console.log('aw', this.trans);
        return this.trans;
      }
      case '11': { 
        this.trans = 'NOV';
        console.log('aw', this.trans);
        return this.trans;
      }
      case '12': { 
        this.trans = 'DEC';
        console.log('aw', this.trans);
        return this.trans;
      }
      default: { 
        console.log("Kosong"); 
        break;              
     }     
    }
  }
}
