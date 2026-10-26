import { isMain } from "../utils/is-main.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface ICurrencyService {
  rate(): Promise<number>;
}

export class CurrencyService implements ICurrencyService {
  async rate(): Promise<number> {
    console.log("Currency Service started");
    await sleep(1000);
    return 12020;
  }
}

export class CurrencyProxy implements ICurrencyService {
  private cachedRate: number | undefined;
  private updateTime = 0;
  constructor(
    private readonly service: ICurrencyService = new CurrencyService(),
    private readonly ttlMs = 60_000,
  ) {}

  async rate(): Promise<number> {
    const expired = Date.now() - this.updateTime > this.ttlMs;
    if (this.cachedRate === undefined || expired) {
      console.log("Cache is empty or expired, calling service");
      this.cachedRate = await this.service.rate();
      this.updateTime = Date.now();
    } else {
      console.log("Currency Service get from cache");
    }
    return this.cachedRate;
  }
}

if (isMain(import.meta.url)) {
  const proxy = new CurrencyProxy();
  console.log(await proxy.rate());
  console.log(await proxy.rate());
  console.log(await proxy.rate());

  const shortProxy = new CurrencyProxy(new CurrencyService(), 500);
  console.log(await shortProxy.rate());
  await sleep(600);
  console.log(await shortProxy.rate());
}
