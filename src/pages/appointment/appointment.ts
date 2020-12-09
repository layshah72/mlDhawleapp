import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
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
  public minDate : any = null;
  public maxDate : any = null;
  public appointmentDate : any = null;
  public appointmentTime : any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HTTP,public storage: Storage) {
  	  if(navParams.get("doctor")!==undefined){
         
         this.doctorDtl=navParams.get("doctor");
      }else{
      	alert(JSON.stringify(navParams.get("doctor")));
      }

      this.minDate=new Date().toJSON().split('T')[0];
      var dt=new Date();
      this.maxDate=new Date(dt.getTime() + (7*24*60*60*1000)).toJSON().split('T')[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }
  bookAppointment(){

  		this.storage.get('userId').then((val3) => {

  			if(val3!=null){
	  			if(null==this.appointmentTime){
	  				alert("Please select appointment time");
	  				return;
	  			}
	  			if(null==this.appointmentDate){
  					alert("Please select appointment date");
  					return;
  				}
  				

		  		let body = {'doctor':this.doctorDtl,'userId':val3,'appointmentDate':this.appointmentDate,'appointmentTime':this.appointmentTime};
		        let headers = {
		              "Content-Type": "application/json"
		        };
		            this.http.setDataSerializer('json');
		            this.http.post('http://35.154.46.137:7001/BookApt/Add',body,headers).then(data => {
		              if(JSON.parse(data.data).StatusCd==0){
		               	alert("Your Appointment Booked successfully. You can view your Appointments from Sidebar.");

		              }else{
		                alert(JSON.stringify(JSON.parse(data.data).Message));
		              }
		        

		            })
		            .catch(error => {

		             alert(error);
		              alert(JSON.stringify(error)); 

		            });

              /*  this.http.post('/api/BookApt/Add',body).map(res => res).subscribe(data => {
                    alert(JSON.stringify(data));  
                   
                        
               
                
      
                    }); */
		            }else{
		            	alert('Please Login before booking the appointment');
		            }
	    });
   }

}
