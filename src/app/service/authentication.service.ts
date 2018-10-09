import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        let loginHeaders = {
            headers: new HttpHeaders({
                'noToken': 'noToken'
            })
        }
        return this.http.post('http://server.simplestate.me/api/user/auth/login', 
        {  email,  password }, loginHeaders)
            .map((response: any) => {
                let user = response;
                if (user && user.access_token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }, err => {
              // console.log('Error: ' + err.error);
              // console.log('Name: ' + err.name);
              // console.log('Message: ' + err.message);
              // console.log('Status: ' + err.status);
              return err;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}