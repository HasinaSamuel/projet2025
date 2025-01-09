import { LandingPageComponent } from './landing-page/landing-page.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SnapFaceListComponent } from './snap-face-list/snap-face-list.component';
export const routes: Routes = [
  {path:'face-snaps', component: SnapFaceListComponent},
  {path: '', component: LandingPageComponent}

];
