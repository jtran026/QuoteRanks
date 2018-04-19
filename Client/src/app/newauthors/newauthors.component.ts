import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newauthors',
  templateUrl: './newauthors.component.html',
  styleUrls: ['./newauthors.component.css']
})
export class NewauthorsComponent implements OnInit {
  newAuthor: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = {name:""}
  }
  addAuthor(name){
    this.newAuthor.name = name
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data =>{
      console.log("!!!!!!!!")
    })
  }
}
