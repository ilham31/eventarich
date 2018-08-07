import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';


export interface FilterInterface {
  categoryName: string,
  model : any
}

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})


export class FilterPage {
  listFilter : any[]=[];
  tanggalFilter:any[]=[];

  rentang : boolean = false;

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

  dualValue2: any = {
    upper: 12,
    lower: 1
  }

  categories : FilterInterface[] = [
    { categoryName : 'Kompetisi', model : this.kompetisi },
    { categoryName : 'Seminar', model : this.seminar },
    { categoryName : 'Lingkungan', model : this.lingkungan },
    { categoryName : 'Expo', model : this.expo },
    { categoryName : 'Olahraga', model : this.olahraga },
    { categoryName : 'Bazaar', model : this.bazaar },
    { categoryName : 'Seni', model : this.seni },
    { categoryName : 'Sosial', model : this.sosial }
  ];

  checkedCategory : boolean[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    localStorage.removeItem('filter');
    console.log("dengan tanggal", this.dualValue2);
    this.checkedCategory = new Array(this.categories.length);
  }

  cariEvent() {
    for(var i = 0; i < this.categories.length; i++) {
      console.log('yang ke-' + i,this.checkedCategory[i]);
      if(this.checkedCategory[i] == true) {
        this.listFilter.push(this.categories[i].categoryName);
      }
    }

    this.tanggalFilter.push(this.dualValue2);
    
    this.navCtrl.getPrevious().data.listEventFilter = this.listFilter;
    this.navCtrl.getPrevious().data.listEventDateFilter = this.tanggalFilter[0];

    this.navCtrl.pop();
    console.log("list Filter", this.listFilter, this.tanggalFilter);
  }
}
