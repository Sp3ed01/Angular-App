import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private currentUserService: UserServiceService, private router: Router) { }
  
  canActivate(): Observable<boolean> {
    return this.currentUserService.currentUser$.pipe(
      filter(currentUser => currentUser !== undefined),
      map((currentUser)=> {
      if(!currentUser) {
        this.router.navigateByUrl('/');
        return false;
      }
      return true;
    })
    )
  }

  // canActivate():boolean{
  //   if(localStorage.getItem("token"))
  //     return true;
  //   return false;
  // }

}
