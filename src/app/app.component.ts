import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Boutique';
  constructor (public authService: AuthService,private router:Router) {}
  ngOnInit() {



    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let loggedUser = localStorage.getItem('loggedUser');

    if (isLoggedIn !== "true" || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  OnLogout(){
    this.authService.Logout();
  }
}
