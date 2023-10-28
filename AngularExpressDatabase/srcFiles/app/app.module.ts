import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { BackendAccessService } from './backend-access.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataFormComponent } from './data-form/data-form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }