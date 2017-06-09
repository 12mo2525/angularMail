import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  // I log Clipboard "copy" errors.
    public logError( error: Error ) : void {

        console.group( "Clipboard Error" );
        console.error( error );
        console.groupEnd();

    }


    // I log Clipboard "copy" successes.
    public logSuccess( value: string ) : void {

        console.group( "Clipboard Success" );
        console.log( value );
        console.groupEnd();

    }
}
