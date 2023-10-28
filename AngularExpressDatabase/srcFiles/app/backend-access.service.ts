import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  title = 'reactiveforms';
  userList : any = [];
  data : any;
  constructor(private http: HttpClient) {

  }
  addUser(udata: any): any {

    this.http.post('http://localhost:9900/insert', udata.value).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      return this.data;
    });
  }

  getAllUsers() {
    console.log("backend is running");
    this.http.get('http://localhost:9900/getAll').subscribe((response) => {
      this.userList = response;
      console.log(this.data);
     
    });
    return this.userList;
  }




  addUser1(udata: any): any {
    this.http.post('http://localhost:9900/insert1', udata.value).subscribe((response) => {
      console.log("adduser1 is works");
      this.data = response;
      console.log(this.data);
      return this.data;
    });
  }

  getUsers1( udata : any) {
    console.log("backend1 is running");
    this.http.post('http://localhost:9900/authentication', udata.value).subscribe((response) => {
    this.userList = response;
    console.log("Received data:", this.userList);
    return this.userList;
  });

    /*this.http.post('http://localhost:9900/authentication', udata.value).subscribe((response) => {
      this.userList = response;
    });*/
    
  }
}
