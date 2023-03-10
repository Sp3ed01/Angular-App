import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth.service';
import { ChildComponent } from './child/child.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { StartComponent } from './start/start.component';

const appRoute: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent}, //canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'start', component: StartComponent },
  { path: 'info', component: AboutUsComponent },
  {
    path: "parent", canActivateChild: [AuthGuardService], children: [
      { path: "info", component: AboutUsComponent },
      { path: "start", component: StartComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [AuthGuardService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
