import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GalleryDto } from './gallery.interface';
import { GalleryComponent } from './gallery/gallery.component';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url: string = 'assets/data.json';

  constructor(private http:HttpClient) {}

  getAllPhotos() {
    return this.http.get<GalleryDto[]>(this.url);
  }
}
