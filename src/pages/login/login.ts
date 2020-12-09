import {Component} from "@angular/core";
import {IonicPage,NavController, NavParams, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import { TabsPage } from '../tabs/tabs';
import {RegisterPage} from "../register/register";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public mobileNum : string = null;
  public password : string = null;

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,public http:HTTP,public storage: Storage,public navCtrl: NavController,public events: Events) {
    //this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    let body = {'mobileNum':this.mobileNum,
          'password':this.password};
        let headers = {
              "Content-Type": "application/json"
            };
            this.http.setDataSerializer('json');
            this.http.post('http://35.154.46.137:7001/Login/Add',body,headers).then(data => {
              if(JSON.parse(data.data).StatusCd==0){
               this.storage.set('mobileNum', this.mobileNum);
               alert(JSON.parse(data.data).userId);
                this.storage.set('userId', JSON.parse(data.data).userId);
                this.storage.set('fullName', JSON.parse(data.data).userName);
                this.storage.set('isDoctor', JSON.parse(data.data).isDoctor);
                this.storage.set('doctorId', JSON.parse(data.data).doctorId);
                this.storage.set('isVerified', 'Y');
                this.navCtrl.push(TabsPage);
                this.events.publish('user:created',  JSON.parse(data.data).userName,JSON.parse(data.data).isDoctor, Date.now());

              }else{
                alert(JSON.stringify(JSON.parse(data.data).Message));
              }
        

            })
            .catch(error => {

             alert(error);
              alert(JSON.stringify(error)); 

            });
  }

  forgotpassword() {
    this.nav.setRoot(ForgotPasswordPage);
  }

}
