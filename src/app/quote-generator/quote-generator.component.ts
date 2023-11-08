import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.scss']
})
export class QuoteGeneratorComponent {
  quotes: Array<any> = [];

  constructor(private http: HttpClient) {}

  getRandomQuote() {
    this.http.get('https://api.quotable.io/random').subscribe((data: any) => {
      this.quotes.unshift(data);
    });
  }
}
