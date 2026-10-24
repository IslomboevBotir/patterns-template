import { isMain } from "../utils/is-main.ts";

export interface IProduct {
  release(): void;
}

export class Car implements IProduct {
  release(): void {
    console.log("Create new car");
  }
}

export class Truck implements IProduct {
  release(): void {
    console.log("Create new truck");
  }
}

export abstract class WorkShop {
  abstract create(): IProduct;
}

export class CarWorkShop extends WorkShop {
  override create(): Car {
    return new Car();
  }
}

export class TruckWorkShop extends WorkShop {
  override create(): Truck {
    return new Truck();
  }
}

if (isMain(import.meta.url)) {
  let creator: WorkShop = new CarWorkShop();
  const car = creator.create();

  creator = new TruckWorkShop();
  const truck = creator.create();

  car.release();
  truck.release();
}
