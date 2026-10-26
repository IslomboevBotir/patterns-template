import { isMain } from "../utils/is-main.ts";

export interface IMemento {
  getDollars(): number;
  getEuro(): number;
}

export class ExchangeMemento implements IMemento {
  constructor(
    private readonly dollars: number,
    private readonly euro: number,
  ) {}

  getDollars(): number {
    return this.dollars;
  }

  getEuro(): number {
    return this.euro;
  }
}

export class Exchange {
  constructor(
    private dollars: number,
    private euro: number,
  ) {}

  getDollars(): void {
    console.log(`Долларов: ${this.dollars}`);
  }

  getEuro(): void {
    console.log(`Евро: ${this.euro}`);
  }

  sell(): void {
    if (this.dollars > 0) this.dollars--;
  }

  buy(): void {
    this.euro++;
  }

  save(): IMemento {
    return new ExchangeMemento(this.dollars, this.euro);
  }

  restore(memento: IMemento): void {
    this.dollars = memento.getDollars();
    this.euro = memento.getEuro();
  }
}

export class Memory {
  private readonly history: IMemento[] = [];

  constructor(private readonly exchange: Exchange) {}

  backup(): void {
    this.history.push(this.exchange.save());
  }

  undo(): void {
    const memento = this.history.pop();
    if (memento) this.exchange.restore(memento);
  }
}

if (isMain(import.meta.url)) {
  const exchange = new Exchange(10, 10);
  const memory = new Memory(exchange);
  exchange.getDollars();
  exchange.getEuro();

  console.log("Sell dollar, buy euro");
  exchange.sell();
  exchange.buy();
  exchange.getDollars();
  exchange.getEuro();

  console.log("Сохраняем состояние");
  memory.backup();

  exchange.sell();
  exchange.buy();
  exchange.getDollars();
  exchange.getEuro();

  console.log("Состояние из памяти");
  memory.undo();
  exchange.getDollars();
  exchange.getEuro();
}
