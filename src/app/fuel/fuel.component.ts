import { Component, OnInit } from '@angular/core';
import { FuelService } from './fuel.service';
import { Iposts } from './iposts';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css'],
  providers: [FuelService]
})
export class FuelComponent implements OnInit {

  _postsArray: Iposts[];
  constructor(private fuelSerivce: FuelService, ) {
  }
  getPost(): void {
    this.fuelSerivce.getPosts()
        .subscribe(
            resultArray => this._postsArray= resultArray,
            error => console.log("Error :: " + error)
        )
}

ngOnInit(): void {
    this.getPost();
}

}