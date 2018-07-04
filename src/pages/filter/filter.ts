import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  list : any[]=[];
  tanggal:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  dualValue2: any = {
    upper:12,
    lower:1
    }
    
    kompetisi : boolean =false;
    seminar : boolean =false;
    lingkungan : boolean =false;
    expo : boolean =false;
    olahraga : boolean =false;
    bazaar : boolean =false;
    seni : boolean =false;
    sosial : boolean =false;
    data : any;
    tanggalBawah: string;
    tanggalAtas : string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  
  cari()
  {
    console.log("nilai",this.kompetisi,this.seminar,this.lingkungan,this.expo,this.olahraga,this.bazaar,this.seni,this.sosial,this.dualValue2.upper,this.dualValue2.lower);
   
    if(this.kompetisi==true)
    {
      this.list.push("Kompetisi")

    }
    if(this.seminar==true)
      {
        this.list.push("Seminar")
      }
    if(this.lingkungan==true)
      {
        this.list.push("Lingkungan")
      }
    if(this.expo==true)
      {
        this.list.push("Expo")
      }
    if(this.olahraga==true)
      {
        this.list.push("Olahraga")
      }
    if(this.bazaar==true)
      {
        this.list.push("Bazaar")
      }
    if(this.seni==true)
      {
        this.list.push("Seni")
      }
    if(this.sosial==true)
     {
      this.list.push("Sosial")
     } 
     if(this.dualValue2.lower<=9)
     {
      this.tanggalBawah = "0"+this.dualValue2.lower
      console.log("date append", this.tanggalBawah)
      this.tanggal.push(this.tanggalBawah);
     }
     else{
      this.tanggalBawah = this.dualValue2.lower.toString()
      this.tanggal.push(this.tanggalBawah);
     }
     
     
     if(this.dualValue2.upper<=9)
     {
      this.tanggalAtas="0"+this.dualValue2.upper
      this.tanggal.push(this.tanggalAtas);
     }
     else{
      this.tanggalAtas = this.dualValue2.upper.toString()
      this.tanggal.push(this.tanggalAtas);
     }
     
    this.navCtrl.push('SearchPage',{list:this.list,tanggal:this.tanggal});
    console.log("list",this.list,this.tanggal)
  }
}
