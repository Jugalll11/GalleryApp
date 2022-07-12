import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ImageService } from '../images/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges{

  title:string = "SuperCar Gallery";
  @Input() filterby? : string = 'all';
  visibleImages : any[] = [];
  constructor(private imageService : ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit(): void {
  }
}
