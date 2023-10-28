import { BackendAccessService } from '../backend-access.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {
  data : any 
  userList1 : any = [];


  constructor ( private baccess: BackendAccessService){
  }

  addUser1(udata : any){
    this.data = this.baccess.addUser1(udata);
  }

  
  verify(udata:any){
   this.userList1 = this.baccess.getUsers1(udata);
   console.log(this.userList1 + "response level 1");
   delay(200);
   return this.userList1;
  }
}
