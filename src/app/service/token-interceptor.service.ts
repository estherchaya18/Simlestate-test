import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler, ): Observable<HttpEvent<any>> {
    if (req.headers.get('notoken') === 'noToken') {
      return next.handle(req);
    }
    else {
      const newRequest = req.clone({
        headers: req.headers.set('Authorization', JSON.parse(localStorage.getItem('currentUser')).token),
      });
      return next.handle(newRequest);
    }

  }
}
