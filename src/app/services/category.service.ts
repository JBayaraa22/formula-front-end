import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { getToken } from '../shared/functions';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
  requestOptions = { headers: this.headers }
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.post<any>(`${environment.apiBase}category/subcategory`, { parent_category_id: null }, this.requestOptions).pipe(
      map((data) => { return data })
    )
  }
}
