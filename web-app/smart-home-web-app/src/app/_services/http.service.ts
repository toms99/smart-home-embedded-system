import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = '';
  }

  public get_api(term: string): any{
    return this.http.get(this.url + term);
  }

  get_api_id(term: string, id: string): any {
    return this.http.get(this.url + term + '/' + id);
  }

  post_api(term: string, json: any): any {
    return this.http.post(this.url + term, json);
  }

  put_api_id(term: string, id: string, json: any): any {
    return this.http.put(this.url + term + '/' + id, json);
  }

  put_api(term: string, json: any): any {
    console.log(json);
    return this.http.put(this.url + term, json);
  }

  delete_api(term: string, id: string): any {
    return this.http.delete(this.url + term + '/' + id);
  }
}
