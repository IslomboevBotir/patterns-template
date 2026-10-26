import { isMain } from "../utils/is-main.ts";

export interface Component {
  read(): void;
}

export class File implements Component {
  constructor(readonly name: string) {}

  read(): void {
    console.log(`${this.name} File reading`);
  }
}

export class Folder implements Component {
  private readonly children: Component[] = [];

  constructor(readonly name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) this.children.splice(index, 1);
  }

  read(): void {
    console.log(`${this.name} Folder reading`);
    for (const child of this.children) {
      child.read();
    }
  }
}

if (isMain(import.meta.url)) {
  const folder = new Folder("mypy");
  const file1 = new File("file1.txt");
  const file2 = new File("file2.csv");
  const file3 = new File("file3.py");
  folder.add(file1);
  folder.add(file2);
  folder.add(file3);
  folder.read();

  folder.remove(file1);
  folder.read();

  const folder2 = new Folder("mypy2");
  folder2.add(new File("file4.py"));
  folder.add(folder2);
  folder.read();
}
