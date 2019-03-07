import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  })
  requestOptions = { headers :  this.headers }
  constructor(private http : HttpClient) { }

  login(data){
    return this.http.post<any>(`${environment.apiBase}user/login` , {username : data.username , password : data.password} , this.requestOptions).pipe(
      map((data)=>{
        return data
      })
    )
  }
}
