import { Injectable } from "@angular/core";
import {AuthService} from "../../../auth.service";
import {HttpService} from "../../../http.service";

@Injectable()
export class DashboardService {

    constructor(private http: HttpService,  private authservice: AuthService) { }

    public getTotal() {
        const token = this.authservice.getUserToken();
        return this.http.sendGetRequest('stat' + '?token=' + token);
      }
     public getProfile() {
        const token = this.authservice.getUserToken();
        return this.http.sendGetRequest('profile' + '?token=' + token);
      }

}