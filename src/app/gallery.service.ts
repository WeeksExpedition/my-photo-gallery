import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GalleryDto } from './gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url: string = 'assets/data.json';

  constructor(private http:HttpClient) {}

  getPhoto() {
    return this.http.get<GalleryDto[]>(this.url);
  }
}
