import { isMain } from "../utils/is-main.ts";

export interface IEngine {
  releaseEngine(): void;
}

export class JapaneseEngine implements IEngine {
  releaseEngine(): void {
    console.log("Japanese Engine");
  }
}

export class RussiaEngine implements IEngine {
  releaseEngine(): void {
    console.log("Russia Engine");
  }
}

export interface ICar {
  releaseCar(engine: IEngine): void;
}

export class JapaneseCar implements ICar {
  releaseCar(engine: IEngine): void {
    console.log("Compose Japanese Car");
    engine.releaseEngine();
  }
}

export class RussiaCar implements ICar {
  releaseCar(engine: IEngine): void {
    console.log("Compose Russia Car");
    engine.releaseEngine();
  }
}

export interface IFactory {
  createEngine(): IEngine;
  createCar(): ICar;
}

export class JapaneseFactory implements IFactory {
  createEngine(): IEngine {
    return new JapaneseEngine();
  }

  createCar(): ICar {
    return new JapaneseCar();
  }
}

export class RussiaFactory implements IFactory {
  createEngine(): IEngine {
    return new RussiaEngine();
  }

  createCar(): ICar {
    return new RussiaCar();
  }
}

function produce(factory: IFactory): void {
  const engine = factory.createEngine();
  const car = factory.createCar();
  car.releaseCar(engine);
}

if (isMain(import.meta.url)) {
  produce(new JapaneseFactory());
  produce(new RussiaFactory());
}
