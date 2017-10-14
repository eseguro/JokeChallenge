import { Component,OnInit } from '@angular/core';
import { GetjokeService } from './getjoke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 title = 'app';
 joke;
  constructor(private service: GetjokeService) { }

  ngOnInit() {

   this.service.getNewJoke()
     .subscribe((res) => this.joke = res.json().value.joke);
  }
}
