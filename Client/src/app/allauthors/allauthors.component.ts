import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {
  authors = [];
  author = {};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService()
  }

  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    console.log("~~~~~~~~~")
    observable.subscribe(data => {
       console.log("Got our authors!", data)
       this.authors = data['data'];
       console.log(this.authors)
    });
  }

  deleteAuthorFromService(author){
    let observable = this._httpService.deleteAuthor(author);
    observable.subscribe(data => {
      this.getAuthorsFromService()
    });
  }

  grabAuthorFromService(author){
    this._httpService.grabAuthorById(author);
  }

  viewAuthorFromService(author){
    console.log(author)
    this._httpService.viewAuthor(author);
  }

}
