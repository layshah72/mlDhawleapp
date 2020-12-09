import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import { VerifyPage } from '../verify/verify';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	public fullName : string = null;	
	public number : string = null;
  constructor(public storage: Storage,public http: HTTP,public navCtrl: NavController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
        if(this.fullName==null||this.fullName==''){
          alert('Please Enter your Name');
          return;
        }
        if(this.number==null||this.number==''){
          alert('Please Enter Valid Mobile number');
          return;
        }
  			let body = {'fullName':this.fullName,
          'mobileNum':this.number};
  			let headers = {
              "Content-Type": "application/json"
          	};
           	this.http.setDataSerializer('json');
          	this.http.post('http://35.154.46.137:7001/Register/Add',body,headers).then(data => {

              	if(data.data.indexOf("User Already")>-1){
                  alert(data.data);
                }else{
                  this.storage.set('fullName', this.fullName);
                  this.storage.set('mobileNum', this.number);
                  this.storage.set('sessionId', data.data);
            
                  this.navCtrl.push(VerifyPage);
                }
              	

            })
            .catch(error => {

             alert(error);
              alert(JSON.stringify(error)); 

            });	
             
          
        /*this.http.post('/api/Register/Add',body).map(res => res).subscribe(data => {
                    alert(JSON.stringify(data));  
                    alert(JSON.stringify(data));
              	this.storage.set('fullName', this.fullName);
				this.storage.set('mobileNum', this.number);
				this.storage.set('sessionId', data);
				this.storage.set('isVerified', 'N'); 
				
				this.navCtrl.push(VerifyPage);   
            });
		 */ 
  }

}
