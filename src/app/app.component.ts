import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBK9M0AgsPybQqi95lrqZmETeVCrY6t4Kc",
      authDomain: "recipe-book-6e2ff.firebaseapp.com",
    });
  }
  
  onNavigate(feature) {
    this.loadedFeature = feature;

  }
}
