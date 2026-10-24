import { isMain } from "../utils/is-main.ts";

export interface IVisitor {
  visitZoo(zoo: Zoo): void;
  visitCinema(cinema: Cinema): void;
  visitCircus(circus: Circus): void;
}

export interface IPlace {
  accept(visitor: IVisitor): void;
}

export class Zoo implements IPlace {
  accept(visitor: IVisitor): void {
    visitor.visitZoo(this);
  }
}

export class Cinema implements IPlace {
  accept(visitor: IVisitor): void {
    visitor.visitCinema(this);
  }
}

export class Circus implements IPlace {
  accept(visitor: IVisitor): void {
    visitor.visitCircus(this);
  }
}

export class HolidayMaker implements IVisitor {
  value = "";

  visitZoo(_zoo: Zoo): void {
    this.value = "Слон в зоопарке";
  }

  visitCinema(_cinema: Cinema): void {
    this.value = "Кино - властелин колец";
  }

  visitCircus(_circus: Circus): void {
    this.value = "Клоун в цирке";
  }
}

export class TicketPriceVisitor implements IVisitor {
  total = 0;

  visitZoo(_zoo: Zoo): void {
    this.total += 30;
  }

  visitCinema(_cinema: Cinema): void {
    this.total += 50;
  }

  visitCircus(_circus: Circus): void {
    this.total += 40;
  }
}

if (isMain(import.meta.url)) {
  const places: IPlace[] = [new Zoo(), new Cinema(), new Circus()];

  for (const place of places) {
    const visitor = new HolidayMaker();
    place.accept(visitor);
    console.log(visitor.value);
  }

  const prices = new TicketPriceVisitor();
  for (const place of places) {
    place.accept(prices);
  }
  console.log("Total ticket price:", prices.total);
}
