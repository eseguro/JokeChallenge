import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetjokeService {

  constructor(private http: Http) { }

  timer = Observable.timer(0, 6000);

  getNewJoke = () => {
    return this.timer
      .flatMap((i) => this.http.get("https://api.icndb.com/jokes/random"));
  }

}
