import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  public doctorDtl : any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HTTP,public storage: Storage) {
  	  if(navParams.get("doctor")!==undefined){
         
         this.doctorDtl=navParams.get("doctor");
      }else{
      	alert(JSON.stringify(navParams.get("doctor")));
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }
  bookAppointment(){
  		this.storage.get('userId').then((val3) => {

  			if(val3!=null){


		  		let body = {'doctor':this.doctorDtl,'userId':val3};
		        let headers = {
		              "Content-Type": "application/json"
		        };
		            this.http.setDataSerializer('json');
		            this.http.post('http://35.154.46.137:7001/BookApt/Add',body,headers).then(data => {
		              if(JSON.parse(data.data).StatusCd==0){
		               	//alert(JSON.stringify(JSON.parse(data.data)));

		              }else{
		                alert(JSON.stringify(JSON.parse(data.data).Message));
		              }
		        

		            })
		            .catch(error => {

		             alert(error);
		              alert(JSON.stringify(error)); 

		            });
		            }else{
		            	alert('Please Login before booking the appoint ment');
		            }
	    });
   }

}
