import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthorizationService } from '../auth/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base = environment.url;

  constructor(private http: HttpClient, private authorizatonService: AuthorizationService) { }

  private getAuthHeaders() {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.authorizatonService.getAuthorizationToken()!);
    headers.append('Uid', this.authorizatonService.getUserId()!);
    return headers;
  }

  get(url: string, withAuthHeaders = true): Observable<any> {
    return this.http.get(this.base + url, { headers: withAuthHeaders ? this.getAuthHeaders(): undefined, withCredentials: true });
  }

  post(url: string, data: any, withAuthHeaders = true): Observable<any> {
    return this.http.post(this.base + url, data, { headers: withAuthHeaders ? this.getAuthHeaders(): undefined, withCredentials: true });
  }

  put(url: string, data: any, withAuthHeaders = true): Observable<any> {
    return this.http.put(this.base + url, data, { headers: withAuthHeaders ? this.getAuthHeaders(): undefined, withCredentials: true });
  }

  delete(url: string, withAuthHeaders = true): Observable<any> {
    return this.http.delete(this.base + url, { headers: withAuthHeaders ? this.getAuthHeaders(): undefined, withCredentials: true });
  }
}
