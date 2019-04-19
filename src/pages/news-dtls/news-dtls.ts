import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDtlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-dtls',
  templateUrl: 'news-dtls.html',
})
export class NewsDtlsPage {

 public newsDes : string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  if(navParams.get("newsId")!==undefined){
         
         this.newsDes=navParams.get("description");
      }else{
      	alert(navParams);
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDtlsPage');
  }

}
