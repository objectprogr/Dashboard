import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { IpostsGithub } from './ipostsGithub';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [ GithubService]
})
export class GithubComponent implements OnInit {

  _postsArray: any[];
  user: string;
  constructor(private githubService: GithubService, ) {
  }
  getPost(): void {
    this.githubService.getPosts()
        .subscribe(
            resultArray => this._postsArray= [resultArray],
            error => console.log("Error :: " + error)
            
        )
    
}


ngOnInit(): void {
    this.getPost();
}
}
