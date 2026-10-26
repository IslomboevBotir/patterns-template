import { isMain } from "../utils/is-main.ts";

export interface IStrategy {
  execute(a: number, b: number): number;
}

export class AddStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class SubStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class MultiStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class DivStrategy implements IStrategy {
  execute(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
}

export class Calculator {
  constructor(private strategy: IStrategy) {}

  setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  calculate(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

if (isMain(import.meta.url)) {
  const calc = new Calculator(new AddStrategy());
  console.log(calc.calculate(2, 3));
  calc.setStrategy(new SubStrategy());
  console.log(calc.calculate(2, 3));
  calc.setStrategy(new MultiStrategy());
  console.log(calc.calculate(2, 3));
  calc.setStrategy(new DivStrategy());
  console.log(calc.calculate(2, 3));
}
