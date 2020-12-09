import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

public mobileNum : string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HTTP) {
  }

  getPassword(){
  		 let body = {'mobileNum':this.mobileNum};
        let headers = {
              "Content-Type": "application/json"
            };
            this.http.setDataSerializer('json');
            this.http.post('http://35.154.46.137:7001/forgotPass',body,headers).then(data => {
              if(JSON.parse(data.data).StatusCd==0){
                alert("Password sent to your registered mobile number");                
                this.navCtrl.push(LoginPage);
               	 

              }else{
                alert(JSON.stringify(JSON.parse(data.data).Message));
                this.navCtrl.push(RegisterPage);
              }
        

            })
            .catch(error => {

             alert(error);
              alert(JSON.stringify(error)); 

            });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

}
