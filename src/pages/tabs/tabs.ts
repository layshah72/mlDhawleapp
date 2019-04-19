import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ContactUsPage} from '../contact-us/contact-us'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public tabTitle : string = null;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root= ContactUsPage;
  
  constructor() {

  }

  
}
