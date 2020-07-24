import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA6KCeUN9iqTyxkD7M3VHlYuD_VDI-8Jhw',
      authDomain: 'angular-library-db.firebaseapp.com',
      databaseURL: 'https://angular-library-db.firebaseio.com',
      projectId: 'angular-library-db',
      storageBucket: 'angular-library-db.appspot.com',
      messagingSenderId: '531834667709',
      appId: '1:531834667709:web:5841557bd25284cee3edd4',
      measurementId: 'G-9FKZG8YJEP',
    };
    firebase.initializeApp(firebaseConfig);
  }
}
