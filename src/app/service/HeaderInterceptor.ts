import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Le traitement est déclenché si la requête sur l'API sample.com
        if(req.url.includes('localhost:3000/todos')) {
            
            // Ajout du header Content-Type
            // => Il est important de noter qu'une requête est immuable, vous devez la cloner
            const clone = req.clone({setHeaders: {'Content-Type': 'application/json'}});

            return next.handle(clone);
        }
        return next.handle(req);
    }
}