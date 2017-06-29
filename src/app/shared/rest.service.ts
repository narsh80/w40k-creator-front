import {Injectable} from '@angular/core';
import {Headers, Http, Request, RequestMethod, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestService {
  private baseUrl = "http://"+location.hostname+":8080/w40k";

  constructor(private http: Http) {
  }

  private request(req: Observable<any>): Promise<any> {
    return req
      .map(resp => {
        return resp.json()
      })
      .toPromise()
      .catch(this.handleError);
  }

  private setUrl(url): string {
    return this.baseUrl + url;
  }

  private setOptions(headers: Headers) {
    headers.append( 'Content-Type', 'application/json' );
    return new RequestOptions({headers: headers});
  }

  post({url, data, headers = new Headers()}: { url: string, data: any, headers?: any }): Promise<any> {
    let requestOptions = this.setOptions(headers);
    return this.request(this.http.post(this.setUrl(url),JSON.stringify(data), requestOptions));
  }

  put({url, data, headers = new Headers()}: { url: string, data: any, headers?: any }): Promise<any> {
    let requestOptions = this.setOptions(headers);
    return this.request(this.http.put(this.setUrl(url),JSON.stringify(data), requestOptions));
  }


  delete({url, headers = new Headers()}: { url: string, headers?: any }): Promise<any> {
    let requestOptions = this.setOptions(headers);
    return this.request(this.http.delete(this.setUrl(url), requestOptions));
  }

  get({url, headers = new Headers()}: { url: string, headers?: any }): Promise<any> {
    let requestOptions = this.setOptions(headers);
    return this.request(this.http.get(this.setUrl(url), requestOptions));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
