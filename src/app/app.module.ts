import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ImageFilterPipe } from './MyComponents/images/shared/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { GalleryComponent } from './MyComponents/gallery/gallery.component';
import { ImagesComponent } from './MyComponents/images/images.component';
import { ImageService } from './MyComponents/images/shared/image.service';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImagesComponent,
    ImageFilterPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
