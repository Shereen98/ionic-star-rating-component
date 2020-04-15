import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  numberArray = [1,2,3,4,5]

  COLOR = {
    GREY: "#E0E0E0",
    YELLOW: "#FFCA28"
  };

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  rate(index: number) {
    // function used to change the value of our rating
    // triggered when user, clicks a star to change the rating
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {

    if (this.isAboveRating(index)) {
      return this.COLOR.GREY;

    } else if (this.rating >= 1 && this.rating <= 5) {
      return this.COLOR.YELLOW;

    } else {
      return this.COLOR.GREY;
    }

  }

  isAboveRating(index: number): boolean {
    // returns whether or not the selected index is above ,the current rating
    // function is called from the getColor function.
    return index > this.rating;
  }
}
