import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface IndexReturn {
  [key: string]: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'eviden_office';
  activeUtils = false;

  prohibitedRoutes: IndexReturn = {
    '/login': false,
    '/register': false,
    '/register-failed': false,
    '/activate-account': false,
    '/confirm-email': false,
    '/confirmation': false,
    '/register-data': false,
    '/verification': false,
    '/verification-code': false
  }

  constructor(private _router: Router){
    _router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd ),
    map(() => {
      if(this.prohibitedRoutes[this._router.url] == false){
        this.activeUtils = false;
      } else{
        this.activeUtils = true;
      }
    })
    ).subscribe();
  }

}
