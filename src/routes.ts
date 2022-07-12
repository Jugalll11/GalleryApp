import { Routes } from "@angular/router";
import { AboutComponent } from "./app/MyComponents/about/about.component";
import { GalleryComponent } from "./app/MyComponents/gallery/gallery.component";
import { ImagesComponent } from "./app/MyComponents/images/images.component";

export const appRoutes : Routes = [
    {path : "gallery", component : GalleryComponent},
    {path : "image/:id", component : ImagesComponent},
    {path : "", redirectTo : "/gallery", pathMatch:"full"},
    {path : "about", component: AboutComponent},
]