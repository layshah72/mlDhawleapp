import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {

 public todo: any;
 public feedBackjson: any;
 public feedBackLines:any;
 public appreciate:string;
 public notlike:string;
 public suggestion:string;
 public extraFacilities:string;


  constructor(public navCtrl: NavController,public http: HTTP,public storage: Storage) {
  		this.todo = "";
      this.feedBackLines=[{
        propertyName:'reception',
        lable:'Reception Counter'
      },
      {
        propertyName:'waiting',
        lable:'Waiting Room Servcies'
      },
      {
        propertyName:'office',
        lable:'Office Servcies'
      },
      {
        propertyName:'emergency',
        lable:'Emergency Room Services'
      },
      {
        propertyName:'doctor',
        lable:'Doctor Services'
      },
      {
        propertyName:'cleaning',
        lable:'Cleaning'
      },
      {
        propertyName:'nursing',
        lable:'Nursing Services'
      },
      {
        propertyName:'ward',
        lable:'Ward attendant\'s Services'
      },
      {
        propertyName:'staff',
        lable:'Staff Behavior'
      },
      {
        propertyName:'overall',
        lable:'Overall experience at this hospital'
      }]
		 this.feedBackjson={
     }
  }
  	save(rate){
      let propertyName=rate.name;
  		this.feedBackjson[propertyName]=rate.rating;
      
  	}
 	  logForm() {
      this.feedBackjson['appreciate'] =this.appreciate;
      this.feedBackjson['notlike'] =this.notlike;
      this.feedBackjson['suggestion'] =this.suggestion;
      this.feedBackjson['extraFacilities']=this.extraFacilities;
      if(Object.keys(this.feedBackjson).length>=this.feedBackLines.length){

          this.storage.get('userId').then((val2) => {
            alert(val2);
            let body = {'userId':val2,
          'feedback':this.feedBackjson};

            
            let headers = {
                "Content-Type": "application/json"
            };
            this.http.setDataSerializer('json');
            this.http.post('http://35.154.46.137:7001/Feedback/Add',body,headers)
              .then(data => {

                alert("Thanks for your Valuable Feedback");
                

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

              });
          });
          
          
        /*  
          
        this.http.post('http://35.154.46.137:7001/Feedback/Add',body).map(res => res.json()).subscribe(data => {
                    alert(JSON.stringify(data));     
            });*/

      }else{
          alert('Please fill the complete form');
      }
	  }

}
