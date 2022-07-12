import { Injectable } from "@angular/core";

@Injectable()
export class ImageService{
    visibleImages : any[] = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id:number){

        return IMAGES.slice(0).find(image => image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "Mercedes", "caption": "Mercedes S-Class", "url": "assets/img/Sclass.jpeg"},
    {"id": 2, "category": "Mercedes", "caption": "Mercedes G-Wagon", "url": "assets/img/Gwagon.jpeg"},
    {"id": 3, "category": "Mercedes", "caption": "Mercedes EQS", "url": "assets/img/eqs.jpeg"},
    {"id": 4, "category": "Mercedes", "caption": "Mercedes AMG GT", "url": "assets/img/AMGGT.jpeg"},
    {"id": 5, "category": "Mercedes", "caption": "Mercedes GLS", "url": "assets/img/GLS.jpeg"},
    {"id": 6, "category": "Bmw", "caption": "BMW M3 Competition", "url": "assets/img/m3.jpeg"},
    {"id": 7, "category": "Bmw", "caption": "BMW M8 Gran-Coupe", "url": "assets/img/m8.jpeg"},
    {"id": 8, "category": "Bmw", "caption": "BMW M5", "url": "assets/img/m5.jpeg"},
    {"id": 9, "category": "Bmw", "caption": "BMW i8", "url": "assets/img/i8.jpeg"},
    {"id": 10, "category": "Bmw", "caption": "BMW X5 Touring", "url": "assets/img/x5.jpeg"},
    {"id": 11, "category": "Audi", "caption": "Audi R8", "url": "assets/img/r8.jpeg"},
    {"id": 12, "category": "Audi", "caption": "Audi TT RS", "url": "assets/img/tt.jpeg"},
    {"id": 13, "category": "Audi", "caption": "Audi RS-6", "url": "assets/img/rs6.jpeg"},
    {"id": 14, "category": "Audi", "caption": "Audi E-tron GT", "url": "assets/img/etron.jpeg"},
    {"id": 15, "category": "Audi", "caption": "Audi Q8 Quatro", "url": "assets/img/q8.jpeg"},
    {"id": 16, "category": "Lexus", "caption": "Lexus LFA", "url": "assets/img/lfa.jpeg"},
    {"id": 17, "category": "Lexus", "caption": "Lexus LC500", "url": "assets/img/lc500.jpeg"},
    {"id": 18, "category": "Ford", "caption": "Ford Mustang GT", "url": "assets/img/mustang.jpeg"},
    {"id": 19, "category": "Ford", "caption": "Ford F150 Raptor", "url": "assets/img/f150.jpg"},
    {"id": 20, "category": "Toyota", "caption": "Toyota Supra", "url": "assets/img/supra.jpeg"},
    {"id": 21, "category": "Toyota", "caption": "Toyota GT-86", "url": "assets/img/gt86.jpeg"},
    {"id": 22, "category": "Lamborghini", "caption": "Lamborghini Gallardo", "url": "assets/img/gallardo.jpeg"},
    {"id": 23, "category": "Lamborghini", "caption": "Lamborghini Huracan", "url": "assets/img/hurracan.jpeg"},
    {"id": 24, "category": "Lamborghini", "caption": "Lamborghini Aventador SVJ", "url": "assets/img/svj.jpeg"},
    {"id": 25, "category": "Lamborghini", "caption": "Lamborghini Murcielago", "url": "assets/img/murcie.jpeg"},
]