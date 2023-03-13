import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesComponent } from './preferences.component';


const routes: Routes = [
  { path: '', component: PreferencesComponent }
];

@NgModule({
  declarations: [
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PreferencesModule { }
