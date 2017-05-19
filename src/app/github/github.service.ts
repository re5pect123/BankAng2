import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

@Injectable()
export class GithubService {

  public searchText;
  constructor(private http: Http) { }

  getUserDetail(userId): Observable<any> {
    const url = 'https://api.github.com/users/' + userId;
    return this.http.get(url).map(
      res => {
        const user = res.json();
        return user;
      }
    )
  }

  getUser(searchText): Observable<any> {
    const url = 'http://api.github.com/search/users?q=' + searchText;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    )
  }

}
