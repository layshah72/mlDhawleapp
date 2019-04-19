import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from "ionic-angular";
import { NewsDtlsPage } from '../news-dtls/news-dtls';
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
	
	// list of news
  public news: any;
  	
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, public http: HTTP) {

    this.http.get('http://35.154.46.137:7001/News/View',{},{})
            .then(data => {
                
                this.news=JSON.parse(data.data);
                

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

      });
  	this.news=[
  			{id:1,title:'Hi hello',description:'loremipsim djadsaod djsafnjfndsfindis jfsdnfksdf sdjfk ds fkdskf dksf dsj fkd skf dskf dskjf ksd fk sdkfskd fk sdkf sdj fkjsd fks fksd'},
  			{id:2,title:'Hi hello 1',description:'loremipsim djadsaod djsafnjfndsfindis jfsdnfksdf sdjfk ds fkdskf dksf dsj fkd skf dskf dskjf ksd fk sdkfskd fk sdkf sdj fkjsd fks fksd'},
  			{id:3,title:'Hi hello 2',description:'loremipsim djadsaod djsafnjfndsfindis jfsdnfksdf sdjfk ds fkdskf dksf dsj fkd skf dskf dskjf ksd fk sdkfskd fk sdkf sdj fkjsd fks fksd'}
  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  

  
  close() {
    this.viewCtrl.dismiss();
  }
  openNewsDtls(id,des){
       this.navCtrl.push(NewsDtlsPage,{newsId:id,description:des}); 
  }

}
