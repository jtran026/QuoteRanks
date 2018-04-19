import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  author: any;

  constructor(private _http: HttpClient) { }

  getAuthors(){
    console.log("authors")
    return this._http.get("/authors")
  }

  addAuthor(author){
    console.log("hello")
    return this._http.post("/author", author)
  }

  deleteAuthor(author){
    return this._http.delete("/authors/remove/" + author._id)
  }

  grabAuthorById(author){
    this.author = author
    return this._http.get('/author/' + author._id, this.author)
  }

  saveAuthor(author) {
    this.author.name = author;
    return this._http.put('/author/edit/' + this.author._id, this.author)
  }

  viewAuthor(author){
    this.author=author
  }
}
