import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    // token: any = Storage.get('token');

    intercept(  req: HttpRequest<any>, 
                next: HttpHandler): Observable<HttpEvent<any>> {
        
        const idToken = localStorage.getItem('token');
        
        if(idToken) {

            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });

            return next.handle(cloned);

        } else {
            return next.handle(req);
        } 
    }
}