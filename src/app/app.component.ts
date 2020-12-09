import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav, MenuController,NavController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {ViewAppointmentsPage} from "../pages/view-appointments/view-appointments";
import {ViewDoctorAppointmentPage} from "../pages/view-doctor-appointment/view-doctor-appointment";
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { ViewChild } from '@angular/core'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage:any = TabsPage;
  public userName:any='';
  public loginDisable:any=false;
  public isDoctor:any=false;
  public doctorId:any=null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl : MenuController,public storage: Storage,public events: Events) {


    splashScreen.hide();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
        
  

    });
    this.storage.get('fullName').then((val2) => {
        if(null!=val2){
          this.userName=val2;
          this.loginDisable=true;
        }
        
    });
    this.storage.get('isDoctor').then((val2) => {
        if(val2=="Y"){
          this.isDoctor=true;
          this.storage.get('doctorId').then((val3) => {
            this.doctorId=val3;
          });
        }
        
    });
    events.subscribe('user:created', (user,isDoctor, time) => {
      
        alert('Welcome'+JSON.stringify(user));
        this.userName=JSON.stringify(user);
        this.loginDisable=true;
        if(isDoctor=="Y"){
          this.isDoctor=true;
        }
    });

    
  }



  closeMenu() {
    this.menuCtrl.close();
  };
  login(){
    this.menuCtrl.close();
    this.rootPage=LoginPage;  
  }

  logout(){
    this.storage.clear();
     this.loginDisable=false;
  }

  appointment(){
       this.nav.push(ViewAppointmentsPage);
  }

  checkAppointmentForMe(){
      this.nav.push(ViewDoctorAppointmentPage);
  }
}
