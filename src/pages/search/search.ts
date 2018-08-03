import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event';

import {SearchPipe} from '../../pipes/search/search'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  dataFilter : any = [];
  event : any;
  events : any;
  anu : any;
  allEvent: any;
  apaan : string;
  modifdata : any;
  filterData : any;
  dataTanggal : any = [];
  tanggal : any;
  tanggalCut:any = [];
  eventsArray:any = [];
  showEvent : any = [];
  eventFiltered : any = [];

  queryText: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventProv:EventProvider) {

  }

  ionViewWillEnter()
  {
    this.allEvent=this.loadEvent();
    this.dataFilter=this.navParams.get('list'); //ngambil data filter dari halaman filter
    this.dataTanggal=this.navParams.get('tanggal');//ngambil data tanggal dari range di halaman filter, index 0 angka paling bawah,index 1 yang tinggi
    console.log("filter data",this.dataFilter);
    console.log("filter tanggal",this.dataTanggal);
    
    console.log("localstorage filter",localStorage.getItem('filter'));
  }

  loadEvent() {
    this.eventProv.getAllEvent().then((event)=>{
      let temp : any = event;
      this.allEvent= temp.json();
      this.eventsArray=this.allEvent.events;
      // this.tanggal=this.allEvent.events[0].date_event.split('-');
      let filter = JSON.parse(localStorage.getItem("filter"));
      
      if(filter)
      {

          console.log("masuk if")
              console.log("masuk if",this.eventsArray[0])
              for(var j =0;j<this.eventsArray.length;j++)   //cek semua event
              {
                console.log("masuk for 1",this.eventsArray[j]);
                this.tanggalCut=this.eventsArray[j].date_event.split('-'); //misahin tanggal buat ambil bulannya doang
                this.tanggal=this.tanggalCut[1];//nyimpen tanggal yg udah di cut
                console.log("tanggal",this.tanggal);
                for(var i =0;i<this.dataFilter.length;i++) //ngambil semua poin yang mau difilter
                {
                  console.log("category event",this.eventsArray[j].categoryevent.name)
                  console.log("tanggalbawah",this.dataTanggal[0],"& tanggal atas",this.dataTanggal[1])
                  if(this.dataTanggal[1]&&this.dataTanggal[0]==0) //tanpa tanggal
                  {
                    console.log("tanpa tanggal")
                    if(this.eventsArray[j].categoryevent.name==this.dataFilter[i]) //kalo categoryname filter==datafilter   
                    {
                      console.log("sama",this.dataFilter[i],"=",this.eventsArray[j].categoryevent.name);    //kalo sama tar print gini
                      console.log("sama dengan filter",this.eventsArray[j]);
                      this.eventFiltered.push(this.eventsArray[j]);
                      
                    }
                    else
                    {
                      console.log("ga sama")
                    }
                  }
                  else
                  {
                    console.log("dengan tanggal")
                    if(this.eventsArray[j].categoryevent.name==this.dataFilter[i] || (this.tanggal<=this.dataTanggal[1]&&this.tanggal>=this.dataTanggal[0])) //kalo categoryname filter==datafilter atau tanggal bawah < ttanggal yg udah di cut < tanggal atas  
                    {
                      console.log("sama",this.dataFilter[i],"=",this.eventsArray[j].categoryevent.name);    //kalo sama tar print gini
                      console.log("sama dengan filter",this.eventsArray[j]);
                      this.eventFiltered.push(this.eventsArray[j]);
                      
                    }
                    else{
                    console.log("ga sama")
                    }
                  }
                  
                }

              //   console.log("tes array event",this.allEvent.events[j]);
              //   console.log("category event",this.allEvent.events[j].categoryevent.name)
              }
              // this.eventsArray=this.allEvent.events;
              // console.log("eventarray",this.eventsArray);
              // localStorage.removeItem("filter")
              console.log("hasil yg sama",this.eventFiltered);
              this.showEvent=this.eventFiltered;
              
      } else {
          console.log("ga masuk filter")
          this.eventsArray=this.allEvent.events
          this.showEvent=this.eventsArray;
      }
    });
    
  }

  ionViewDidLeave(){
    localStorage.removeItem('filter');
  }
  
  filter() {
    this.navCtrl.push('FilterPage');
    
  }

  lihatEvent(listEvent) {
    this.navCtrl.push('EventPage',listEvent);
  }

}
