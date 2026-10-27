import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { BmiCalculator } from './components/bmi-calculator/bmi-calculator';
import { Dashboard } from './components/dashboard/dashboard';
import { Workouts } from './components/workouts/workouts';
import { Progress } from './components/progress/progress';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'bmi',
    component: BmiCalculator
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'workouts',
    component: Workouts
  },
  {
    path: 'progress',
    component: Progress
  },
  {
    path: 'profile',
    component: Profile
  }
];