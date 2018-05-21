import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  /* 
    Ангуляр проверяет, в каком состоянии находится тот или иной роут, 
    какой адрес прописан в адресной строке и в зависимости от этого будет проверять:
    можно ли человеку зайти на тот роут или нельзя
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        return true;
      } else {
        return false;
      }
    });
  }

}