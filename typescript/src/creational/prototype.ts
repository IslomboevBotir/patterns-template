import { isMain } from "../utils/is-main.ts";

export interface SheepParams {
  weight: number;
  height: number;
}

export class Sheep {
  private name = "";
  private params: SheepParams = { weight: 20, height: 34 };

  constructor(donor?: Sheep) {
    if (donor) {
      this.name = donor.getName();
      this.params = structuredClone(donor.getParams());
    }
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getParams(): Readonly<SheepParams> {
    return this.params;
  }

  setWeight(weight: number): void {
    this.params.weight = weight;
  }

  clone(): Sheep {
    return new Sheep(this);
  }
}

if (isMain(import.meta.url)) {
  const sheepDonor = new Sheep();
  sheepDonor.setName("ЕЕЕЕ");

  const sheepClone = sheepDonor.clone();

  console.log(sheepDonor.getName());
  console.log(sheepClone.getName());
  sheepDonor.setName("WWWW");
  console.log(sheepDonor.getName());
  console.log(sheepClone.getName());

  sheepDonor.setWeight(99);
  console.log("donor:", sheepDonor.getParams());
  console.log("clone:", sheepClone.getParams());
  console.log("new sheep:", new Sheep().getParams());
}
