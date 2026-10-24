import { isMain } from "../utils/is-main.ts";

export class PizzaItem {
  constructor(readonly number: number) {}

  toString(): string {
    return `Кусочек пиццы под номером: ${this.number}`;
  }
}

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class PizzaSliceIterator implements Iterator<PizzaItem> {
  private index = 0;

  constructor(private readonly items: readonly PizzaItem[]) {}

  next(): PizzaItem {
    const item = this.items[this.index];
    if (item === undefined) {
      throw new Error("No more pizza slices");
    }
    this.index++;
    return item;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }
}

export class PizzaAggregate implements Iterable<PizzaItem> {
  private readonly slices: PizzaItem[];

  constructor(amountSlices = 10) {
    this.slices = Array.from({ length: amountSlices }, (_, i) => new PizzaItem(i + 1));
    console.log(`Приготовили пиццу и порезали на ${amountSlices} кусочков`);
  }

  amountSlices(): number {
    return this.slices.length;
  }

  iterator(): Iterator<PizzaItem> {
    return new PizzaSliceIterator(this.slices);
  }

  *[Symbol.iterator](): Generator<PizzaItem> {
    const it = this.iterator();
    while (it.hasNext()) {
      yield it.next();
    }
  }
}

if (isMain(import.meta.url)) {
  const pizza = new PizzaAggregate(5);

  const iterator = pizza.iterator();
  while (iterator.hasNext()) {
    console.log(`Это ${iterator.next()}`);
  }

  console.log("--- for...of ---");
  for (const item of pizza) {
    console.log(`Это ${item}`);
  }
}
