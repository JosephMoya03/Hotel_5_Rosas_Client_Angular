import { Component } from '@angular/core';
import { AboutUsServiceService } from 'src/app/services/about-us-service/about-us-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  gallery: any = []
  ImagenDefault: any// = this.gallery[0].Imagen;

  title: string = '';
  information: string = '';

  constructor(private service: AboutUsServiceService) {
    this.service.getAboutUs().subscribe(aboutUs =>{
      this.title = aboutUs.titulo
      this.information = aboutUs.informacion
    })
    this.service.getGalleryPhotos().subscribe(gallery =>{
      this.gallery = gallery;
      this.ImagenDefault = this.gallery[0].imagen;
    })
  }
  showImage(image: string) {
    this.ImagenDefault = image;
  }


}
