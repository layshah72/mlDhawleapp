import { Component, Input, EventEmitter ,Output} from "@angular/core";



@Component({
  selector: "rating",
  templateUrl: "rating.html"
})
export class RatingComponent {
  @Input() rating: number ;
  @Input() name1: string ;
  @Output() ratingChange: EventEmitter<any> = new EventEmitter();;

  
  constructor() {}

  rate(index: number) {
      this.rating= index;
      this.ratingChange.emit({name:this.name1,rating:this.rating});
   }

  getColor(index: number) {
      if(this.isAboveRating(index)){
          return "#E0E0E0";
      }
      switch(this.rating){
          case 1 :
          case 2 :
            return "#DD2C00";
          case 3 :
            return "#FFCA28";
          case 4 :
          case 5 :
            return "#76FF03";
          default :
            return "#E0E0E0";  
      }
    }

  isAboveRating(index: number): boolean {
      return index > this.rating
  }
}