import {AuthService} from "../../../auth.service";
import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';


import {Testimony, TestimoniesPaginator} from "../testimony.interface";
import {HttpService} from "../../../http.service";
import {Observable} from "rxjs/observable";

@Injectable()
  export class ApprovedService {
  public Disapprovedlistpaginator = new EventEmitter<TestimoniesPaginator>();
  constructor(private http: HttpService, private authservice: AuthService) { }
// nntact list services handled here

//   public addTestimony(title: string, body: string ) {
//     const token = this.authservice.getUserToken();
//     return this.http.sendPostRequest('testimony?token=' + token, {title: title, body:body} ,
//       { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); }

  // upload(fileToUpload: any) {
  //       const input = new FormData();
  //       input.append('file', fileToUpload);
  //       return this.http.post('http://localhost:80/testapp/public/api/Contact-list', input); }
  // getContact() {
  //   const token = this.authservice.getUserToken();
  //          return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/Contact-list?token=' + token) }


  public getDisapprovedPaginator(){
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('approved?token=' + token).subscribe(
      data => {this.processGetDisapprovedPaginator(data); console.log(data);},
      error => {console.log(error)} );
  }
  processGetDisapprovedPaginator(disapproved_data){

    if(disapproved_data && disapproved_data.data){
      this.Disapprovedlistpaginator.emit(disapproved_data);
    } else{
      console.log(' error has Occured!!');
    }
  }
  public getPaginatedDisapproved(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetDisapprovedPaginator(data)}
    );
  }
 
//   updateTestimony(id: number,  title: string, body: string) {
//     const token = this.authservice.getUserToken();
//     return this.http.sendPutRequest('testimony/' + id + '?token=' + token , {title: title, body:body},
//       { headers : new HttpHeaders ({'Content-Type': 'application/json' })
//       }); }
//   deleteTestimony(id: number) {
//     const token = this.authservice.getUserToken();
//     return this.http.sendCustomDeleteRequest('http://localhost:8000/testimony/' + id + '?token=' + token); }


  // postTogroup(group_id: number, contact_id: number) {
  //   return this.http.post('http://localhost:80/testapp/public/api/Contact-detail/' + group_id / + contact_id,{
  //     headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //   }); }

}
