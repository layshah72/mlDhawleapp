import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ViewDoctorAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-doctor-appointment',
  templateUrl: 'view-doctor-appointment.html',
})
export class ViewDoctorAppointmentPage {

    public appointments : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HTTP,public storage: Storage) {


  	this.appointments=[];

	  this.storage.get('doctorId').then((val1) => {
	  	this.http.get('http://35.154.46.137:7001/AppointMents/Doctorview/'+val1+'/?doctorId='+val1,{},{})
            .then(data => {
                //alert(data.data);
                this.appointments=JSON.parse(data.data);
                

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

              });
	  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAppointmentsPage');
  }

}
