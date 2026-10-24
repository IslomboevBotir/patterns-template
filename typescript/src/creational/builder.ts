import { isMain } from "../utils/is-main.ts";

export class Phone {
  private data = "";

  aboutPhone(): string {
    return this.data;
  }

  appendData(data: string): void {
    this.data += data;
  }
}

export abstract class Developer {
  protected phone = new Phone();

  abstract createDisplay(): void;
  abstract createBox(): void;
  abstract systemInstall(): void;

  getPhone(): Phone {
    const result = this.phone;
    this.phone = new Phone();
    return result;
  }
}

export class AndroidDeveloper extends Developer {
  override createDisplay(): void {
    this.phone.appendData("Created display Samsung\n");
  }

  override createBox(): void {
    this.phone.appendData("Created box Samsung\n");
  }

  override systemInstall(): void {
    this.phone.appendData("Installed system Samsung\n");
  }
}

export class IphoneDeveloper extends Developer {
  override createDisplay(): void {
    this.phone.appendData("Created display Iphone\n");
  }

  override createBox(): void {
    this.phone.appendData("Created box Iphone\n");
  }

  override systemInstall(): void {
    this.phone.appendData("Installed system Iphone\n");
  }
}

export class HuaweiDeveloper extends Developer {
  override createDisplay(): void {
    this.phone.appendData("Created display Huawei\n");
  }

  override createBox(): void {
    this.phone.appendData("Created box Huawei\n");
  }

  override systemInstall(): void {
    this.phone.appendData("Installed system Huawei\n");
  }
}

export class Director {
  constructor(private developer: Developer) {}

  setDeveloper(developer: Developer): void {
    this.developer = developer;
  }

  mountOnlyPhone(): Phone {
    this.developer.createBox();
    this.developer.createDisplay();
    return this.developer.getPhone();
  }

  mountFullPhone(): Phone {
    this.developer.createBox();
    this.developer.createDisplay();
    this.developer.systemInstall();
    return this.developer.getPhone();
  }
}

if (isMain(import.meta.url)) {
  const androidDeveloper = new AndroidDeveloper();
  const director = new Director(androidDeveloper);
  const samsung = director.mountFullPhone();
  console.log(samsung.aboutPhone());

  director.setDeveloper(new IphoneDeveloper());
  const iphone = director.mountOnlyPhone();
  console.log(iphone.aboutPhone());

  director.setDeveloper(new HuaweiDeveloper());
  const huawei = director.mountOnlyPhone();
  console.log(huawei.aboutPhone());

  director.setDeveloper(androidDeveloper);
  const samsung2 = director.mountOnlyPhone();
  console.log(samsung2.aboutPhone());
}
