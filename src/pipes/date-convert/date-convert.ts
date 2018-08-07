import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConvert',
})

export class DateConvertPipe implements PipeTransform {

  transform(value: any, type: any): any {
    
    var date : any = {
      tanggal: '',
      bulan : '',
      tahun : ''
    };

    var temp : any;

    if(!value) return value;

    temp = value.split("-");
    date.tahun = temp[0];
    date.bulan = temp[1];
    date.tanggal = temp[2].substring(0,2);
    
    if(type === 'justBulan' ) {
      return date.bulan;
    } else if(type === 'short') {
      switch(date.bulan) {
        case '01': { 
          date.bulan = 'JAN';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '02': { 
          date.bulan = 'FEB';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '03': { 
          date.bulan = 'MAR';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '04': { 
          date.bulan = 'APR';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '05': { 
          date.bulan = 'MAY';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '06': { 
          date.bulan = 'JUN';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '07': { 
          date.bulan = 'JUL';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '08': { 
          date.bulan = 'AUG';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '09': { 
          date.bulan = 'SEP';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '10': { 
          date.bulan = 'OCT';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '11': { 
          date.bulan = 'NOV';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '12': { 
          date.bulan = 'DEC';
          let temp = [date.tanggal, date.bulan];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        default: { 
          console.log("Kosong"); 
          break;              
        }     
      }
    } else if(type === 'long') {
      switch(date.bulan) {
        case '01': { 
          date.bulan = 'JANUARI';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '02': { 
          date.bulan = 'FEBRUARI';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '03': { 
          date.bulan = 'MARET';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '04': { 
          date.bulan = 'APRIL';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '05': { 
          date.bulan = 'MEI';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '06': { 
          date.bulan = 'JUNI';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '07': { 
          date.bulan = 'JULI';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        } 
        case '08': { 
          date.bulan = 'AGUSTUS';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '09': { 
          date.bulan = 'SEPTEMBER';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '10': { 
          date.bulan = 'OKTOBER';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '11': { 
          date.bulan = 'NOVEMBER';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        case '12': { 
          date.bulan = 'DESEMBER';
          let temp = [date.tanggal, date.bulan, date.tahun];
          let outputDate = temp.join(' ');
          return outputDate;
        }
        default: { 
          console.log("Kosong"); 
          break;              
       }     
      }
    }
    
  }
}
