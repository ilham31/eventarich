import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  listFilter : any = [];
  tanggalFilter : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  dualValue2: any = {
    upper:12,
    lower:1
  }
    
  //   kompetisi : boolean =false;
  //   seminar : boolean =false;
  //   lingkungan : boolean =false;
  //   expo : boolean =false;
  //   olahraga : boolean =false;
  //   bazaar : boolean =false;
  //   seni : boolean =false;
  //   sosial : boolean =false;
  //   data : any;
  //   tanggalBawah: string;
  //   tanggalAtas : string;
  //     ionViewDidLoad() {
  //   console.log('ionViewDidLoad FilterPage');
  // }
    
  kompetisi : boolean = false;
  seminar : boolean = false;
  lingkungan : boolean = false;
  expo : boolean = false;
  olahraga : boolean = false;
  bazaar : boolean = false;
  seni : boolean = false;
  sosial : boolean = false;
  data : any;
  tanggalBawah: string;
  tanggalAtas : string;
  rentang : boolean;
  
  cariEvent() {   
    if(this.kompetisi==true) {
      this.listFilter.push("Kompetisi");
    } else if(this.seminar==true) {
      this.listFilter.push("Seminar");
    } else if(this.lingkungan==true) {
      this.listFilter.push("Lingkungan");
    } else if(this.expo==true) {
      this.listFilter.push("Expo");
    } else if(this.olahraga==true) {
      this.listFilter.push("Olahraga");
    } else if(this.bazaar==true) {
      this.listFilter.push("Bazaar");
    } else if(this.seni==true) {
      this.listFilter.push("Seni");
    } else if(this.sosial==true) {
      this.listFilter.push("Sosial");
    } 
    if(this.rentang==true)
    {
        console.log("dengan tanggal")
      if(this.dualValue2.lower <= 9) {
        this.tanggalBawah = "0" + this.dualValue2.lower;
        console.log("date append", this.tanggalBawah);
        this.tanggalFilter.push(this.tanggalBawah);
      } else {
        this.tanggalBawah = this.dualValue2.lower.toString();
        this.tanggalFilter.push(this.tanggalBawah);
      }
       
       
      if(this.dualValue2.upper<=9)
      {
      this.tanggalAtas="0"+this.dualValue2.upper
      this.tanggalFilter.push(this.tanggalAtas);
      }
      else{
      this.tanggalAtas = this.dualValue2.upper.toString()
      this.tanggalFilter.push(this.tanggalAtas);
      }
    }
    else
    {
      console.log("tanpa tanggal")
      this.tanggalBawah="0";
      this.tanggalAtas="0";
      this.tanggalFilter.push(this.tanggalBawah);
      this.tanggalFilter.push(this.tanggalAtas);
    }
    
    localStorage.setItem('filter', "true");
    // this.backToSearch(this.listFilter, this.tanggalFilter);
    this.navCtrl.getPrevious().data.list = this.listFilter;
    this.navCtrl.getPrevious().data.tanggal = this.tanggalFilter;
    this.navCtrl.pop();
    console.log("list",this.listFilter,this.tanggalFilter)
  }
}
