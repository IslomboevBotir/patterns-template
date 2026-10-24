import { isMain } from "../utils/is-main.ts";

export class TreeType {
  constructor(
    readonly name: string,
    readonly color: string,
    readonly texture: string,
  ) {}

  draw(x: number, y: number): string {
    return `drawing ${this.color} ${this.name} tree at ${x}:${y} with ${this.texture}`;
  }
}

export class TreeTypeFactory {
  private static readonly treeTypes = new Map<string, TreeType>();

  static create(name: string, color: string, texture: string): TreeType {
    const key = `${name}|${color}|${texture}`;
    let treeType = TreeTypeFactory.treeTypes.get(key);
    if (!treeType) {
      treeType = new TreeType(name, color, texture);
      TreeTypeFactory.treeTypes.set(key, treeType);
      console.log("create new tree with name", name);
    }
    return treeType;
  }

  static get size(): number {
    return TreeTypeFactory.treeTypes.size;
  }
}

export class Tree {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly treeType: TreeType,
  ) {}

  display(): string {
    return this.treeType.draw(this.x, this.y);
  }
}

if (isMain(import.meta.url)) {
  const trees: Tree[] = [];
  for (let i = 0; i < 200; i++) {
    const treeType = TreeTypeFactory.create("Archa", "Yashil", "Igna bargli");
    trees.push(new Tree(i, i * 2, treeType));
  }

  for (let i = 0; i < 200; i++) {
    const treeType = TreeTypeFactory.create("Yong'oq", "Kulrang", "Katta bargli");
    trees.push(new Tree(i, i * 2, treeType));
  }

  console.log("tree[0]:", trees[0]!.display());
  console.log("tree[199]:", trees[199]!.display());
  console.log("tree[201]:", trees[201]!.display());
  console.log("tree[399]:", trees[399]!.display());

  console.log("Length of trees:", trees.length);
  console.log("Length of tree factory:", TreeTypeFactory.size);
}
