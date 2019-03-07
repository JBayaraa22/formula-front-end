import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from './components/formula/formula.component';
import { LoginComponent } from './components/login/login.component';
import { FormulaDetailComponent } from './components/formula-detail/formula-detail.component';
import { CategoryComponent } from './components/category/category.component';
const routes: Routes = [
  { path : '', redirectTo:"login" , pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'formula', component: FormulaComponent },
  { path: 'formula/:id', component: FormulaDetailComponent },
  { path: 'category', component: CategoryComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }