import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'child', component: ChildComponent},
      {path: 'parent', component: ParentComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '**', component: PageNotFoundComponent},

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
