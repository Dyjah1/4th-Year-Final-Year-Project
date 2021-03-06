import { AboutPage } from './../pages/about/about';
import { SearchResultRoomPage } from './../pages/search-result-room/search-result-room';
import { SearchResultPropertyPage } from './../pages/search-result-property/search-result-property';
import { UpdateMyRoomAdPage } from './../pages/update-my-room-ad/update-my-room-ad';
import { UpdateMyPropertyAdPage } from './../pages/update-my-property-ad/update-my-property-ad';
import { SearchPage } from './../pages/search/search';
import { MyPropertyAdsPage } from './../pages/my-property-ads/my-property-ads';
import { MyRoomAdsPage } from './../pages/my-room-ads/my-room-ads';
import { Message } from './../providers/message';
import { ImagesProvider } from './../providers/images/images';
import { PropertyAd } from './../providers/propertyAd';
import { RoomAd } from './../providers/roomAd';
import { ForgetPasswordPage } from './../pages/forget-password/forget-password';
import { RegisterPage } from './../pages/register/register';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { CreateRoomAdPage } from './../pages/create-room-ad/create-room-ad';
import { CreatePropertyAdPage } from './../pages/create-property-ad/create-property-ad';
import { CreatePage } from './../pages/create/create';
import { ListOfRoomsPage } from './../pages/list-of-rooms/list-of-rooms';
import { ListOfPropertiesPage } from './../pages/list-of-properties/list-of-properties';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MessageboardPage } from './../pages/messageboard/messageboard';
import { CreatemessagePage } from './../pages/createmessage/createmessage';
import { SearchPipe } from '../pipes/search/search';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { IonicImageViewerModule} from 'ionic-img-viewer'
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPopoverPage } from '../pages/about-popover/about-popover';

firebase.initializeApp(FIREBASE_CONFIG);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListOfRoomsPage,
    ListOfPropertiesPage,
    CreatePage,
    CreatePropertyAdPage,
    CreateRoomAdPage, 
    LoginPage,
    RegisterPage,
    ForgetPasswordPage,
    MessageboardPage,
    CreatemessagePage,
    MyRoomAdsPage,
    MyPropertyAdsPage,
    SearchPage,
    UpdateMyPropertyAdPage,
    UpdateMyRoomAdPage,
    SearchPipe,
    SearchResultPropertyPage,
    SearchResultRoomPage,
    AboutPopoverPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicImageViewerModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListOfRoomsPage,
    ListOfPropertiesPage,
    CreatePage,
    CreatePropertyAdPage,
    CreateRoomAdPage,
    LoginPage,
    RegisterPage,
    ForgetPasswordPage,
    MessageboardPage,
    CreatemessagePage,
    MyRoomAdsPage,
    MyPropertyAdsPage,
    SearchPage,
    UpdateMyPropertyAdPage,
    UpdateMyRoomAdPage,
    SearchResultPropertyPage,
    SearchResultRoomPage,
    AboutPopoverPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    FileTransfer,
    RoomAd,
    PropertyAd,
    GooglePlus,
    ImagesProvider,
    Message,
    LaunchNavigator,
    InAppBrowser
  ]
})
export class AppModule {}
