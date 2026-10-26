import { isMain } from "../utils/is-main.ts";

export interface ICoffee {
  cost(): number;
}

export class SimpleCoffee implements ICoffee {
  cost(): number {
    return 10;
  }
}

export abstract class CoffeeDecorator implements ICoffee {
  constructor(protected readonly coffee: ICoffee) {}

  abstract cost(): number;
}

export class MilkCoffee extends CoffeeDecorator {
  override cost(): number {
    return this.coffee.cost() + 5;
  }
}

export class ChocolateCoffee extends CoffeeDecorator {
  override cost(): number {
    return this.coffee.cost() + 7;
  }
}

if (isMain(import.meta.url)) {
  const coffee = new SimpleCoffee();
  console.log(coffee.cost());
  console.log(new MilkCoffee(coffee).cost());
  console.log(new ChocolateCoffee(coffee).cost());
  console.log(new ChocolateCoffee(new MilkCoffee(coffee)).cost());
}
