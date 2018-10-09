

import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

model: any = {};
loading = false;
returnUrl: string;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

login() {
    this.loading = true;
    this.authenticationService.login(this.model.mail, this.model.password)
        .subscribe(
            data => {
                this.router.navigate(['/page/dashboard']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
