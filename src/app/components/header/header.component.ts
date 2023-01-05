import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayMenu!: boolean;
  router!: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.displayMenu = false;
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  goToDashboard() {
    this.router.navigateByUrl('home');
  }
}
