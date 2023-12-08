enum SeatChoice {
  AISLE,
  MIDDLE = 10, // default is 0, 1, 2, ...
  WINDOW = "WINDOW",
}

const seatChoice = SeatChoice.AISLE;

const enum SeatChoice2 { // JS generated is a lot straight forward if you use const with enum
  AISLE,
  MIDDLE = 10, // default is 0, 1, 2, ...
  WINDOW = "WINDOW",
}

const seatChoice2 = SeatChoice2.AISLE;

export {};
