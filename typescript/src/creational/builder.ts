import { isMain } from "../utils/is-main.ts";

export interface PhoneSpec {
  brand: string;
  display: string;
  camera: string;
  battery: number; // mAh
  memory: number; // GB
  os: string;
}

export class Phone {
  box = false;
  display?: string;
  camera?: string;
  battery?: number;
  memory?: number;
  os?: string;

  constructor(readonly brand: string) {}

  aboutPhone(): string {
    const rows: [string, string | undefined][] = [
      ["Box", this.box ? "yes" : undefined],
      ["Display", this.display],
      ["Camera", this.camera],
      ["Battery", this.battery === undefined ? undefined : `${this.battery} mAh`],
      ["Memory", this.memory === undefined ? undefined : `${this.memory} GB`],
      ["OS", this.os],
    ];
    return [
      this.brand,
      ...rows.map(([name, value]) => `  ${name.padEnd(8)} ${value ?? "-"}`),
    ].join("\n");
  }
}

export abstract class Developer {
  private phone: Phone;

  protected constructor(private readonly spec: PhoneSpec) {
    this.phone = new Phone(spec.brand);
  }

  createBox(): void {
    this.phone.box = true;
  }

  createDisplay(): void {
    this.phone.display = this.spec.display;
  }

  createCamera(): void {
    this.phone.camera = this.spec.camera;
  }

  installBattery(): void {
    this.phone.battery = this.spec.battery;
  }

  setMemory(): void {
    this.phone.memory = this.spec.memory;
  }

  systemInstall(): void {
    this.phone.os = this.spec.os;
  }

  getPhone(): Phone {
    const result = this.phone;
    this.phone = new Phone(this.spec.brand);
    return result;
  }
}

export class AndroidDeveloper extends Developer {
  constructor() {
    super({
      brand: "Samsung",
      display: '6.8" AMOLED',
      camera: "200MP",
      battery: 5000,
      memory: 256,
      os: "Android 15",
    });
  }
}

export class IphoneDeveloper extends Developer {
  constructor() {
    super({
      brand: "Iphone",
      display: '6.1" OLED',
      camera: "48MP",
      battery: 3500,
      memory: 128,
      os: "iOS 18",
    });
  }
}

export class HuaweiDeveloper extends Developer {
  constructor() {
    super({
      brand: "Huawei",
      display: '6.7" OLED',
      camera: "50MP",
      battery: 4500,
      memory: 256,
      os: "HarmonyOS 4",
    });
  }
}

export class Director {
  constructor(private developer: Developer) {}

  setDeveloper(developer: Developer): void {
    this.developer = developer;
  }

  mountOnlyPhone(): Phone {
    return this.mountCustom("createDisplay", "createBox");
  }

  mountFullPhone(): Phone {
    return this.mountCustom(
      "createDisplay",
      "createCamera",
      "installBattery",
      "setMemory",
      "systemInstall",
      "createBox",
    );
  }

  mountCustom(...steps: BuildStep[]): Phone {
    for (const step of steps) {
      this.developer[step]();
    }
    return this.developer.getPhone();
  }
}

export type BuildStep = Exclude<keyof Developer, "getPhone">;

if (isMain(import.meta.url)) {
  const androidDeveloper = new AndroidDeveloper();
  const director = new Director(androidDeveloper);
  console.log(director.mountFullPhone().aboutPhone(), "\n");

  director.setDeveloper(new IphoneDeveloper());
  console.log(director.mountOnlyPhone().aboutPhone(), "\n");

  director.setDeveloper(new HuaweiDeveloper());
  console.log(director.mountFullPhone().aboutPhone(), "\n");

  director.setDeveloper(androidDeveloper);
  console.log(director.mountOnlyPhone().aboutPhone(), "\n");

  console.log(
    director.mountCustom("createDisplay", "systemInstall", "createBox").aboutPhone(),
  );
}
