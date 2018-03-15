import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import {Iposts} from './iposts';
import { catchError, map, tap } from 'rxjs/operators';
import { Http , Response, HttpModule} from '@angular/http';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FuelService {

  private _postsURL = "http://dashboard.mb.gbzl.pl/db1.php";

  constructor(private http: Http) {
  }

  getPosts(): Observable<Iposts[]> {
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
              return <Iposts[]>response.json();
              
          })     
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }

}