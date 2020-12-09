import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
public otp : string = null;
public password : string = null;
public disable : string = null;
  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams,public http: HTTP,public events: Events) {
  		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }
  verify(){
  		let sessionId;
  		let mobileNum;
  		let fullName;
  		this.disable = 'disabled';
  		this.storage.get('sessionId')
  		.then((val1) => {
  			alert(val1);
			sessionId=val1;
			this.storage.get('mobileNum').then((val2) => {
				    mobileNum=val2;
				    this.storage.get('fullName').then((val3) => {
				    	fullName=val3;
						let body = {'mobileNum':mobileNum,
				          'sessionId':sessionId,'fullName':fullName,'otp':this.otp,'password':this.password};

				  			let headers = {
				              "Content-Type": "application/json"
				          	};

				           	this.http.setDataSerializer('json');
				           	

				          	this.http.post('http://35.154.46.137:7001/Verify/Add',body,headers).then(data => {

				              		
				              	if(JSON.parse(data.data).StatusCd==0){
				              		this.storage.set('userId', JSON.parse(data.data).userId);
				              		this.events.publish('user:created', fullName, Date.now());
				              		this.storage.set('isVerified', 'Y');
				              		this.navCtrl.push(TabsPage);
				              	}else{
				              		alert(JSON.parse(data.data).StatusCd);
				              	}	
								

				            })
				            .catch(error => {

				             alert(error);
				              alert(JSON.stringify(error)); 

				            });			    	
					});
			});
		});	

  		
  		
  			
        /*this.http.post('/api/Verify/Add',body).map(res => res).subscribe(data => {
                    alert(JSON.stringify(data));  
                   
              	
				this.storage.set('userId', data);
				 
				
				this.navCtrl.push(HomePage);   
            });  */		

  }

}
