import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Http } from '@angular/http';
import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public slide1 : string = null;	
public slide2 : string = null;
public slide3 : string = null;
public slide4 : string = null;
public slide5 : string = null;
public homePageData: any;
public homePageContent:string;
public services:any;

  constructor(public navCtrl: NavController, public http: Http,public menu :MenuController,public events: Events, public popoverCtrl: PopoverController) {
  
 
      this.menu.enable(true);
      this.http.get('https://api.myjson.com/bins/1es4dw').map(res => res.json()).subscribe(data => {
		      this.homePageData = data;
              this.slide1=this.homePageData.slide1;

        this.slide2=this.homePageData.slide2;

        this.slide3=this.homePageData.slide3;

        this.slide4=this.homePageData.slide4;

        this.slide5=this.homePageData.slide5;	     

        this.homePageContent=this.homePageData.homePageContent;
    });
    
    events.subscribe('pushData:communication', data => {
      
         this.navCtrl.push(NewsPage,data);
    });
    this.services=[{
          value:'',
          lable:'Overview',
          Description:'Here at hospital we provide multiple services like Indoor Patient Facility,Homoeopathic Services,Allopathic Services,Dental Department,Investigation Facilities and other Suppportive services. Click here to know the scheule of Doctor',
          image:'https://mldtrust.org/wp-content/uploads/2017/08/malad.jpg'
        },
        {
          value:'PHYSIOTHERAPY',
          lable:'PHYSIOTHERAPY',
          Description:'Physiotherapy service for muscle empowerment .Click here to know the scheule of Doctor',
          image:'https://drive.google.com/uc?id=1vwV77UPQpEAzghy9P0Kyc1V2XBuxXnz0'

        },
        {
          value:'Pathology',
          lable:'Pathology',
          Description:'Free TB Rx with Gene Expert,Free HIV Rx,Medical Social Worker',
          image:'https://drive.google.com/uc?id=1WApltg_b8AnGmHs-lqBIELBHvIiYfd-d'
        },
        {
          value:'PHYSICIAN',
          lable:'PHYSICIAN',
          Description:'Full time physician support',
          image:'https://drive.google.com/uc?id=1q78rCi-mUK1dCKk17r7OJqXP4B0hvD_x'
        },
        {
          value:'PAEDIATRICS (CHILD SPECIALISTS)',
          lable:'PAEDIATRICS (CHILD SPECIALISTS)',
          Description:'Paediatric Neonatal-surgery & Paediatric urologist',
          image:'https://www.amrita.edu/sites/default/files/news-images/2011/b-feb/pediatrics1.jpg'

        },
        {
          value:'GENERAL SURGERY',
          lable:'GENERAL SURGERY',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=1WApltg_b8AnGmHs-lqBIELBHvIiYfd-d'
        },
        {
          value:'GYNAEC & OBST',
          lable:'GYNAEC & OBST',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=1WApltg_b8AnGmHs-lqBIELBHvIiYfd-d'
        },
        {
          value:'DENTAL',
          lable:'DENTAL',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=1WApltg_b8AnGmHs-lqBIELBHvIiYfd-d'
        },
        {
          value:'OPTHALMOLOGY',
          lable:'OPTHALMOLOGY',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        },
        {
          value:'DIETICIAN',
          lable:'DIETICIAN',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        },
        {
          value:'ORTHOPEDIC',
          lable:'ORTHOPEDIC',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        },
        {
          value:'Special O.P.D.-',
          lable:'Special O.P.D.-',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        },
        {
          value:'ORTHO DENTIST',
          lable:'ORTHO DENTIST',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        },
        {
          value:'Homoeopathic',
          lable:'Homoeopathic',
          Description:'Laparoscopic surgery,Urology,Cancer Surgery',
          image:'https://drive.google.com/uc?id=14_oVKNWjDfllwpvi4OMVa3AUsZfi6Vur'
        }
      ];            
  		

  		
  }

  navigate(serviceName){
    this.navCtrl.push(AboutPage,{name:serviceName});
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  news(myEvent){
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NewsPage);
    popover.present({
      ev: myEvent
    });
  }

  

}
