import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDtlsPage } from './news-dtls';

@NgModule({
  declarations: [
    NewsDtlsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDtlsPage),
  ],
})
export class NewsDtlsPageModule {}
