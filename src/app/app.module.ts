import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { MenuController,NavController } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AppointmentPage } from '../pages/appointment/appointment';
import {ViewAppointmentsPage} from "../pages/view-appointments/view-appointments";
import {ViewDoctorAppointmentPage} from "../pages/view-doctor-appointment/view-doctor-appointment";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { RatingComponent} from '../components/rating/rating';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { VerifyPage } from '../pages/verify/verify';
import { NewsPage } from '../pages/news/news';
import { NewsDtlsPage } from '../pages/news-dtls/news-dtls';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import {TripService} from "../services/trip-service";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from "@ionic-native/google-maps";
import { IonicStorageModule } from '@ionic/storage';


var firebaseConfig = {
  apiKey: "AIzaSyCDznx_76a-7o-enfxttNySj3W9sj5RpmQ",
  authDomain: "",
  databaseURL: "https://jsonserviceproject.firebaseio.com",
  projectId: "jsonserviceproject",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ContactUsPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    NewsPage,
    VerifyPage,
    AppointmentPage,
    ViewAppointmentsPage,
    ViewDoctorAppointmentPage,
    NewsDtlsPage,
    ForgotPasswordPage,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  exports: [
    ContactPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ContactUsPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    NewsPage,
    VerifyPage,
    AppointmentPage,
    ViewAppointmentsPage,
    ViewDoctorAppointmentPage,
    NewsDtlsPage,
    ForgotPasswordPage,
    RatingComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
        HTTP,
          SQLite,
          Toast,
          Geolocation,
          GoogleMaps,
          TripService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {
  

  
  
}
