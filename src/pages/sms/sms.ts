import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SMS } from "@ionic-native/sms";
/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {
  phone:number;
  textmessage:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toast:ToastController,public sms:SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }
  async sendText(){
    try {
      await this.sms.send(String(this.phone),this.textmessage);
      const toast = this.toast.create({
        message:'text send!',
        duration:3000
      });
      toast.present();
      
    } catch (e) {
      const toast = this.toast.create({
        message:'text not send!',
        duration:3000
      });
      toast.present();
      
    }
  }
}
