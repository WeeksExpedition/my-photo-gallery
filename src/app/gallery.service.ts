import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GalleryDto } from './gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url: string = 'http://localhost:3000/images';

  constructor(private http:HttpClient) {}

  getAllPhotos() {
    return this.http.get<GalleryDto[]>(this.url);
  }
}
