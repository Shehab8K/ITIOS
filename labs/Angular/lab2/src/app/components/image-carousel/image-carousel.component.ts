import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})

export class ImageCarouselComponent {
  prev: number = 1;
  num: number = 2;
  next: number = 3;
  start:any;
  left(){
    if(this.prev > 1)
    {
      this.prev--;
      this.num--;
      this.next--;
    }
  }

  right(){
    if(this.next < 6)
    {
      this.prev++;
      this.num++;
      this.next++;
    }
  }

  loopImg(){
    this.start = setInterval(()=>{
      this.prev++;
      this.num++;
      this.next++;

      switch(true)
      {
        case this.next == 7:
        this.next = 1;
        break;

        case this.num == 7:
        this.num =1;
        break;

        case this.prev == 7:
        this.prev =1;
        break;
      }
    },500);
  }

  clearImg(){
    clearInterval(this.start);
  }
}


