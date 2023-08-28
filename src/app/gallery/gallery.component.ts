import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  title = 'my-photo-gallery';
  galleryData:any;
  url: string = 'http://localhost:3000/images';

  constructor(private GalleryService: GalleryService) {}

  ngOnInit() {
    this.GalleryService.getAllPhotos().subscribe(res => {
      this.galleryData = res;
    });
  }
}