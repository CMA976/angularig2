import { Routes } from '@angular/router';
export const routes: Routes = [
  {path:"page1/:id", loadComponent:()=>import('./pages/page1/page1.component').then(c=>c.Page1Component)},
  {path:"page2", loadComponent:()=>import('./pages/page2/page2.component').then(c=>c.Page2Component)},
  {path:"page3", loadComponent:()=>import('./pages/page3/page3.component').then(c=>c.Page3Component)}
];
