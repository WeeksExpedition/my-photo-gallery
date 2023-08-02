import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-photo-gallery';
  galleryData:any;
  url: string = '/assets/data.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.galleryData = res;
    });
  }
}
