import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackendAccessService } from '../backend-access.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'reactiveforms';
  userList : any = [];
  userList1 : any = [];
  data : any;


  constructor (private http : HttpClient, private baccess: BackendAccessService) {
   
  }
  addUser(udata : any){
    this.data = this.baccess.addUser(udata);
  }

  getAllUsers(){
   this.userList = this.baccess.getAllUsers();
   console.log(this.userList);
   return this.userList;
  }

updateUser(form : NgForm){
    this.http.put('http://localhost:9900/update', form.value ).subscribe((response) => {
      this.data = response;
      console.log(this.data);
    })
  }
  deleteUser(udata : any){
    this.http.post('http://localhost:9900/delete', udata.value ).subscribe((response) => {
      this.data = response;
      console.log(this.data);
    })
  }







  addUser1(udata : any){
    this.data = this.baccess.addUser(udata);
  }

  getAllUsers1(){
   this.userList1 = this.baccess.getAllUsers();
   console.log(this.userList1);
   return this.userList1;
  }

}
