import { isMain } from "../utils/is-main.ts";

export class Point {
  private constructor(
    readonly x: number,
    readonly y: number,
  ) {}

  static newCartesianPoint(x: number, y: number): Point {
    return new Point(x, y);
  }

  static newPolarPoint(rho: number, theta: number): Point {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }

  toString(): string {
    return `x: ${this.x}, y: ${this.y}`;
  }
}

if (isMain(import.meta.url)) {
  const p1 = Point.newPolarPoint(2, 3);
  const p2 = Point.newCartesianPoint(2, 3);

  console.log(`${p1} ${p2}`);
}
