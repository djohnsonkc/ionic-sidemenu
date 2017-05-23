import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'onboarding.html'
})

export class OnboardingPage {

  constructor(public nav: NavController) {

  }

  slides = [
    {
      title: "Welcome to MyApp!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "More reasons...",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Even more reasons...",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];


  gotoHome() {
    // this.nav.push(HomePage, {
    //     firstname: "Nic",
    //     lastname: "Raboy"
    // });

    let options = { animate: true }
    // using setRoot allows the home page menu to be shown and 
    // most-importantly, supresses the back button
    this.nav.setRoot(HomePage, {
        fromPage: "onboarding"
    }, options)
  }

}