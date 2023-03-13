import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ItemsResolverService implements Resolve<string[]> {
  resolve(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      setTimeout(() => {
        observer.next(['Item 1', 'Item 2', 'Item 3']);
        observer.complete();
      }, 2000);
    });
  }
}
