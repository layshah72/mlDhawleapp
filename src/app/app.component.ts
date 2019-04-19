import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController,NavController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any = TabsPage;
  public userName:any='';
  public loginDisable:any=false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl : MenuController,public storage: Storage,public events: Events) {


    splashScreen.hide();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
        
  

    });
    this.storage.get('fullName').then((val2) => {
        alert(val2);
        if(null!=val2){
          this.userName=val2;
          this.loginDisable=true;
        }
        
    });
    events.subscribe('user:created', (user, time) => {
      
        alert('Welcome'+JSON.stringify(user));
        this.userName=JSON.stringify(user);
        this.loginDisable=true;
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
}
