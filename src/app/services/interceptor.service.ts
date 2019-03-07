import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor , HttpRequest , HttpHandler , HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs'
import { getToken } from '../shared/functions';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class InterceptorService implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = getToken()
    request = request.clone({
      setHeaders : {
        Authorization : `Token ${token}`
      }
    })
    console.log({request , token})
    return next.handle(request)
  }

  constructor() { }
}
