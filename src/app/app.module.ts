import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AddComponent,
    DeleteComponent,
    NavbarComponent,
    FooterComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  

    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
