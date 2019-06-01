import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})


export class ContactUsPage {
 
  @ViewChild('map') mapElement: ElementRef;	
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  map: GoogleMap;
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleMapPage');
    this.loadMap();
  }

  loadMap(){

	// Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {

          lat: 19.188360,
          lng: 72.860725
        },
        zoom: 18,
        tilt: 30
      }
    });
    let marker: Marker = this.map.addMarkerSync({
        position: {lat:19.188360, lng:72.860725},
        iconData: {
          url: "https://cdn0.iconfinder.com/data/icons/healthcare-medicine/512/hospital_building-512.png",
          size: {
            width: 24,
            height: 24
          }
        }
      });
	 	marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);


  }

  onMarkerClick(params: any) {
    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }
  
}
