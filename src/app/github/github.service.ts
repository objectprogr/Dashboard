import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IpostsGithub } from './ipostsGithub'
@Injectable()
export class GithubService {

  private _postsURL = "https://api.github.com/repos/objectprogr/Dashboard/git/refs/heads/v1";

  
  constructor(private http: Http) {
    
  }

  getPosts(): Observable<IpostsGithub[]> {
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
              return <IpostsGithub[]>response.json();
              
          })     
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }

}
