import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    // Both of these would work!
    this.navController.navigateForward(`/tabs/(films:films/42)`);
    // this.router.navigateByUrl(`/tabs/(films:films/42)`);
  }
 
  goToPlanets() {
    this.navController.goRoot(`/tabs/(planets:planets)`)
  }

}
