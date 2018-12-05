import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { SmsPage } from '../pages/sms/sms';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsPage } from '../pages/news/news';


@NgModule({
  declarations: [
    MyApp,
    SmsPage,
    HomePage,
    NewsDetailPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SmsPage,
    HomePage,
    NewsDetailPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
