import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allquotes',
  templateUrl: './allquotes.component.html',
  styleUrls: ['./allquotes.component.css']
})
export class AllquotesComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
