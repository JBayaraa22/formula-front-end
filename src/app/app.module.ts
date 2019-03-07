import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormulaComponent } from './components/formula/formula.component';
import { FormulaDetailComponent } from './components/formula-detail/formula-detail.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { InterceptorService } from './services/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaComponent,
    CategoryComponent,
    FormulaDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
