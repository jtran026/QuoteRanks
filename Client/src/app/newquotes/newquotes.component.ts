import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newquotes',
  templateUrl: './newquotes.component.html',
  styleUrls: ['./newquotes.component.css']
})
export class NewquotesComponent implements OnInit {
  newQuote: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newQuote = {quote:""}
  }
}
