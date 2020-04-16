import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  numberArray = [1, 2, 3, 4, 5];

  COLOR = {
    GREY: "#E0E0E0",
    YELLOW: "#FFCA28"
  };

  constructor() {}

  ngOnInit(): void {}

  rate(index: number) {
    // function used to change the value of our rating
    // triggered when user, clicks a star to change the rating
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    if (this.isAboveRating(index) || !this.numberArray.includes(this.rating)) {
      return this.COLOR.GREY;
    } else {
      return this.COLOR.YELLOW;
    }
  }

  isAboveRating(index: number): boolean {
    // returns whether or not the selected index is above ,the current rating
    // function is called from the getColor function.
    return index > this.rating;
  }
}
