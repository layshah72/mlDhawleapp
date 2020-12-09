import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavController ,NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AppointmentPage } from '../appointment/appointment';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



 public doctors : any = null;
 public currentVer : string="0.1.0";
public onlinecurrentVer : string=null;
 public doctorsSearched : any = null;
 public services:any=null;
public i : number = null;
public j : number = null;
public specialities:any= null;
public special:any=null;

  constructor(public navCtrl: NavController, public http: HTTP,private navParams: NavParams) {
       
            this.doctors=[];
            this.http.get('http://35.154.46.137:7001/version/1?hospitalId=1',{},{})
            .then(data => {
                 //alert(JSON.stringify(data.data)); 
                this.onlinecurrentVer=data.data;
                if(this.onlinecurrentVer.trim() !==this.currentVer.trim()){
                   alert("Please update the Application. New version is available on play store"); 
                }
                

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

              });               

            this.http.get('http://35.154.46.137:7001/Department/View/1?hospitalId=1',{},{})
            .then(data => {
                
                this.services=JSON.parse(data.data);
                

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

              });
              this.http.get('http://35.154.46.137:7001/Doctors/View/1?hospitalId=1',{},{})
            .then(data => {
                
                this.doctorsSearched=JSON.parse(data.data);
                this.doctors=JSON.parse(data.data);
                if(navParams.get("name")!==undefined){
                   this.applySpecialitySearch(navParams.get("name"));
                }

              })
              .catch(error => {

               alert(error);
                alert(error.error); 

              });


      /*this.http.get('/api/Doctors/View/1?hospitalId=1').map(res => res.json()).subscribe(data => {
           
          this.doctors=data;
    });*/
    
/*  		this.services=[{
          value:'',
          lable:'All'
        },
        {
          value:'PHYSIOTHERAPY',
          lable:'PHYSIOTHERAPY'
        },
        {
          value:'Pathology',
          lable:'Pathology'
        },
        {
          value:'PHYSICIAN',
          lable:'PHYSICIAN'
        },
        {
          value:'PAEDIATRICS (CHILD SPECIALISTS)',
          lable:'PAEDIATRICS (CHILD SPECIALISTS)'
        },
        {
          value:'GENERAL SURGERY',
          lable:'GENERAL SURGERY'
        },
        {
          value:'GYNAEC & OBST',
          lable:'GYNAEC & OBST'
        },
        {
          value:'DENTAL',
          lable:'DENTAL'
        },
        {
          value:'OPTHALMOLOGY',
          lable:'OPTHALMOLOGY'
        },
        {
          value:'DIETICIAN',
          lable:'DIETICIAN'
        },
        {
          value:'ORTHOPEDIC',
          lable:'ORTHOPEDIC'
        },
        {
          value:'Special O.P.D.-',
          lable:'Special O.P.D.-'
        },
        {
          value:'ORTHO DENTIST',
          lable:'ORTHO DENTIST'
        },
        {
          value:'Homoeopathic',
          lable:'Homoeopathic'
        }
      ];
*/
      /*this.doctors=[
        {
          "id":1,
          "name":'Dr.Sunil Multani (M.D.PATH)',
          "day":'Mon to Sat.',
          "time":'8:30 AM to 5:00 PM',
          "speciality":'Pathology',
          "departmentid":1
        },
        {
          "id":2,
          "name":'Dr.Yogita Parab (B.P.T.,M.P.T.NERO.)',
          "day":'Mon to Sat.',
          "time":'1:30 PM to 3:30 PM',
          "speciality":'PHYSIOTHERAPY',
          "departmentid":1
        },
        {
          "id":3,
          "name":'Dr.Pradeep Kalra (M.D.MED.)',
          "day":'Every Tuesday & Thursday',
          "time":'12:30 AM to 1:00 PM',
          "speciality":' PHYSICIAN',
          "departmentid":1
        },
        {
          "id":4,
          "name":'Dr.Devavrath Sahasane (M.D.MED.)',
          "day":'Every Monday & Friday',
          "time":'6:00 PM to 6:30 PM',
          "speciality":' PHYSICIAN',
          "departmentid":1
        },
        {
          "id":5,
          "name":'Dr.Nitin Deshpande (M.D. Paeds)',
          "day":'Monday & Wednesday',
          "time":'3:30 PM to 4:00 PM',
          "speciality":' PAEDIATRICS (CHILD SPECIALISTS)',
          "departmentid":1
        },
        {
          "id":6,
          "name":'Dr.Ganesh Salunke (M.B.B.S.D.C.H.)',
          "day":'Every Saturday',
          "time":'2:00 PM to 2:30 PM',
          "speciality":' PAEDIATRICS (CHILD SPECIALISTS)',
          "departmentid":1
        },
        {
          "id":6,
          "name":'Dr.Arvind Dhar (M.B.B.S.D.C.H.C.G.)',
          "day":'Every Friday',
          "time":'2:00 PM to 2:30 PM',
          "speciality":' PAEDIATRICS (CHILD SPECIALISTS)',
          "departmentid":1
        },
        {
          "id":7,
          "name":'Dr.Archana Sharma (MBBS,DCH(CPS)',
          "day":'Every  Tuesday &Thursday',
          "time":'2:30 PM to 3:00 PM',
          "speciality":' PAEDIATRICS (CHILD SPECIALISTS)',
          "departmentid":1
        },
        {
          "id":8,
          "name":'Dr.Kamal Shukla (M.S.Gen.Surg)',
          "day":'Every Thursday',
          "time":'6:30 PM to 7:00 PM',
          "speciality":'GENERAL SURGERY',
          "departmentid":1
        },
        {
          "id":9,
          "name":'Dr.C.B.Sahay (M.S.Gen.Surg )',
          "day":'Every Friday',
          "time":'10:00 AM to 12:00 PM',
          "speciality":'GENERAL SURGERY',
          "departmentid":1
        },
        {
          "id":10,
          "name":'Dr.Ritu Jain (M.S.)',
          "day":'  Mon,Wed. & Fri.',
          "time":'4:00 PM to 4:30 PM',
          "speciality":'GYNAEC & OBST',
          "departmentid":1
        },
        {
          "id":11,
          "name":'Dr.Priti Naware  (D.G.O.,S.P.T.)',
          "day":'  Tue, Thur & Fri.',
          "time":'12:00 PM to 12:30 PM',
          "speciality":'GYNAEC & OBST',
          "departmentid":1
        },
        {
          "id":12,
          "name":'Dr.Priyanka Pandey (D.G.O.)',
          "day":' Tue, Thur & Sat.',
          "time":'4:00 PM to 4:30 PM',
          "speciality":'GYNAEC & OBST',
          "departmentid":1
        },
        {
          "id":13,
          "name":'Dr.Renubala Rout (D.N.B.)',
          "day":'  Mon,Wed. & Sat.',
          "time":'12:30 PM to 1:00 PM',
          "speciality":'GYNAEC & OBST',
          "departmentid":1
        },
        {
          "id":14,
          "name":'Dr.Chakshu Shah (B.D.S.)',
          "day":' Mon to Sat.',
          "time":'9:00 AM to 12:00 PM',
          "speciality":'DENTAL',
          "departmentid":1
        },
        {
          "id":15,
          "name":'Dr.Prachi Kamble (B.D.S.)',
          "day":' Mon to Fri / Sat.',
          "time":'12-00pm to 03-00pm / 1.00 pm to 3.00pm',
          "speciality":'DENTAL',
          "departmentid":1
        },
        {
          "id":16,
          "name":'Dr.Saloni Parab (B.D.S)',
          "day":' Mon to Sat.',
          "time":'3.00 pm to 7.00pm',
          "speciality":'DENTAL',
          "departmentid":1
        },
        {
          "id":17,
          "name":'Dr.Bhavin Khatri (D.N.B.)',
          "day":' Mon,Wed.& Thrs. / Mon To Sat.',
          "time":'12.00pm to 2.00pm/ 06.00pm to 8.00pm',
          "speciality":'DENTAL',
          "departmentid":1
        },
        {
          "id":18,
          "name":'Dt.Alpana Tarkar(P.G. DIETIC C.D.E.)',
          "day":'Mon to Fri / Monday & Friday ',
          "time":'09.00am to 11.00am / 4.30 pm to 6.30pm',
          "speciality":'DIETICIAN',
          "departmentid":1
        },
        {
          "id":19,
          "name":'Dr.Abhishek Jaipuriya (M.S.)',
          "day":'Every Wednesday',
          "time":'02-00pm to 2-30pm',
          "speciality":'ORTHOPEDIC',
          "departmentid":1
        },
        {
          "id":20,
          "name":'Dr.Ashwini Kalyankar (M.B.,D.N.B.,F.M.A.S.',
          "day":'Laparoscopic Surgeon',
          "time":'By Appointment',
          "speciality":'Special O.P.D.-',
          "departmentid":1
        },
        {
          "id":21,
          "name":'Dr.Rajesh Jain (M.B.B.S.,M.S.C.H.)',
          "day":'M.B.B.S.,M.S.(Gen.Surgery),M.CH.(Paediatric Surgery)',
          "time":'By Appointment',
          "speciality":'Special O.P.D.-',
          "departmentid":1
        },
        {
          "id":22,
          "name":'Dr.Sorabh Jain(M.D.S)',
          "day":'PERIODONTIST',
          "time":'By Appointment',
          "speciality":'ORTHO DENTIST',
          "departmentid":1
        },
        {
          "id":23,
          "name":'Dr.Shailendra Pathak (B.D.S.)',
          "day":'MODERN DENTISTRY',
          "time":'By Appointment',
          "speciality":'ORTHO DENTIST',
          "departmentid":1
        },
        {
          "id":24,
          "name":'Dr.Shama Rao (M.D.hom.)',
          "day":'Every Monday',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-Skin',
          "departmentid":1
        },
        {
          "id":25,
          "name":'Dr.Kumar Dhawale(M.D.D.P.M.M.F. Hom.LOND)',
          "day":'Every Wednesday',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-PSYCHIATRIC ',
          "departmentid":1
        },
        {
          "id":26,
          "name":'Dr.Sunil Bhalinge (M.D. hom.)',
          "day":'Every Friday',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-RHEUMATOLOGY ',
          "departmentid":1
        }, 
        {
          "id":27,
          "name":'Dr.Jagruti Dhabuwala (L.C.E.H)',
          "day":'Every Thursday',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-GYNAEC & OBST',
          "departmentid":1
        },  
        {
          "id":28,
          "name":'DR.SACHIN NADKARNI',
          "day":'MON-SAT',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-MEDICAL OFFICERS',
          "departmentid":1
        },
        {
          "id":29,
          "name":'DR.SONALI CHOUBAL',
          "day":'MON-SAT',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-MEDICAL OFFICERS',
          "departmentid":1
        },
        {
          "id":30,
          "name":'DR.KAMLESH JAIN',
          "day":'MON-SAT',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-MEDICAL OFFICERS',
          "departmentid":1
        },
        {
          "id":31,
          "name":'DR.ROHINI SHINGARE',
          "day":'MON-SAT',
          "time":'09 -00am to12-30pm',
          "speciality":'Homoeopathic-MEDICAL OFFICERS',
          "departmentid":1
        },
      ];*/
		 
      
  
  
  }

  toggleGroup(group) {
    group.show = !group.show;
  };

  isGroupShown(group) {
    return group.show;
  };
  applySearch(ev: any) {
 
      this.doctorsSearched=this.doctors;
        // set val to the value of the searchbar
        let val = ev.value;
    
        if (val && val.trim() != '') {
           this.doctorsSearched = this.doctors.filter((doctor) => {
             return (
             doctor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
           });
          }
          
        
  }
  applySpecialitySearch(ev: any){


     
      this.doctorsSearched=this.doctors;
      if (ev && ev.trim() != '') {
             this.doctorsSearched = this.doctors.filter((doctor) => {
               return (
               doctor.department.value.indexOf(ev) > -1);
             });
            }
   
  }
  navigate(doctor){

    //alert(JSON.stringify(doctor));
    this.navCtrl.push(AppointmentPage,{doctor:doctor});
  }

}
