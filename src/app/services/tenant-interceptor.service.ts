import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantInterceptorService {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        'tenant': 'stupa' 
      }
    });
    return next.handle(modifiedRequest);
  }
 
}
