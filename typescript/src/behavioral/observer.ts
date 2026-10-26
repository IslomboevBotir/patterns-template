import { isMain } from "../utils/is-main.ts";

export interface IObserver {
  update(price: number): void;
}

export interface IObservable {
  addObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notify(): void;
}

export class Product implements IObservable {
  private readonly observers: IObserver[] = [];

  constructor(private price: number) {}

  changePrice(price: number): void {
    this.price = price;
    this.notify();
  }

  addObserver(o: IObserver): void {
    this.observers.push(o);
  }

  removeObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) this.observers.splice(index, 1);
  }

  notify(): void {
    for (const o of [...this.observers]) {
      o.update(this.price);
    }
  }
}

export class Wholesale implements IObserver {
  constructor(private readonly product: IObservable) {
    product.addObserver(this);
  }

  update(price: number): void {
    if (price < 300) {
      console.log(`Оптовик закупил товар по цене ${price}`);
      this.product.removeObserver(this);
    }
  }
}

export class Buyer implements IObserver {
  constructor(private readonly product: IObservable) {
    product.addObserver(this);
  }

  update(price: number): void {
    if (price < 350) {
      console.log(`Покупатель закупил товар по цене ${price}`);
      this.product.removeObserver(this);
    }
  }
}

if (isMain(import.meta.url)) {
  const product = new Product(400);
  new Wholesale(product);
  new Buyer(product);
  product.changePrice(320);
  product.changePrice(280);

  console.log("--- ikkalasi bir vaqtda ---");
  const product2 = new Product(400);
  new Wholesale(product2);
  new Buyer(product2);
  product2.changePrice(200);
}
