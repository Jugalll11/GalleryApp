import { Component, OnInit } from '@angular/core';
import { ImageService } from "./shared/image.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  image:any;

  constructor(private imageServevice : ImageService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.imageServevice.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
