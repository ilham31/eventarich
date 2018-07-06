import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  dataFilter : any[]=[]
  event : any;
  events : any;
  anu : any;
  allEvent: any;
  apaan : string;
  modifdata : any;
  filterData : any;
  dataTanggal : any[]=[];
  tanggal : any;
  tanggalCut:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public eventProv:EventProvider) {
    // console.log("yang dikirim filter",this.navParams.data);
  
    // this.getEvent();
    }

  ionViewWillEnter()
  {
    this.allEvent=this.loadEvent();
    this.dataFilter=this.navParams.get('list'); //ngambil data filter dari halaman filter
    this.dataTanggal=this.navParams.get('tanggal');//ngambil data tanggal dari range di halaman filter, index 0 angka paling bawah,index 1 yang tinggi
    console.log("diluar",this.allEvent);
    console.log("filter data",this.dataFilter);
    console.log("filter tanggal",this.dataTanggal);
    
    // for(var i =0;i<this.dataFilter.length;i++)
    // {
    //   console.log("tes array",this.dataFilter[i])
    // }
    
  }
  loadEvent()
  {
    this.eventProv.getAllEvent().then((event)=>{
      let temp : any = event;
      this.allEvent= temp.json();
      console.log("event",event);
      console.log("this.allevent",this.allEvent);
      console.log("this.allevent.events",this.allEvent.events);
      // this.tanggal=this.allEvent.events[0].date_event.split('-');
      
    
      for(var j =0;j<this.allEvent.length;j++)   //cek semua event
      {
        this.tanggalCut=this.allEvent.events[j].date_event.split('-'); //misahin tanggal buat ambil bulannya doang
        this.tanggal[j]=this.tanggalCut[1];//nyimpen tangga yg udah di cut
        console.log("tanggal",this.tanggal[j]);
        for(var i =0;i<this.dataFilter.length;i++) //ngambil semua poin yang mau difilter
        {
          console.log("category event",this.allEvent.events[j].categoryevent.name)
          console.log("tanggalbawah",this.dataTanggal[0],"& tanggal atas",this.dataTanggal[1])
          if(this.allEvent.events[j].categoryevent.name==this.dataFilter[i] || (this.tanggal<=this.dataTanggal[1]&&this.tanggal>=this.dataTanggal[0])) //kalo categoryname filter==datafilter atau tanggal bawah < ttanggal yg udah di cut < tanggal atas  
          {
              console.log("sama",this.dataFilter[i],"=",this.allEvent.events[j].categoryevent.name);    //kalo sama tar print gini
              console.log("sama dengan filter",this.allEvent.events[j]);
          }
          // else{
          //   console.log("ga sama")
          // }
        }

        console.log("tes array event",this.allEvent.events[j]);
        console.log("category event",this.allEvent.events[j].categoryevent.name)
      } 
    });
    
  }

  // filterEvent()
  // {
  //   this.modifdata=JSON.parse(JSON.stringify(this.allEvent));
  //   this.filterData = this.modifdata.filter((this.dataFilter)=>{
  //     return 
  //   })
  // }

  // getEvent()
  // {
  //   this.loadEvent().then((data)=>{
  //     this.events=data;
  //     console.log("getEvent()",this.events);
  //   })
  // }

  

  filter()
  {
    this.navCtrl.push('FilterPage');
  }

}
