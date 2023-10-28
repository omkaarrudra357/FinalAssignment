import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { DataFormComponent } from './data-form/data-form.component';

const routes: Routes = [{path: 'aboutus', component:AboutusComponent}, {path:'contactus', component:ContactusComponent}, {path:'home', component: HomeComponent},{path:'data-form', component:DataFormComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AboutusComponent, ContactusComponent, HomeComponent, DataFormComponent];
