import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ParentComponent } from './parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<ParentComponent> {
  canDeactivate(
    component: ParentComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.newItem !== '') {
      return window.confirm('Are you sure you want to leave? Any unsaved changes will be lost.');
    }
    return true;
  }
  
}
