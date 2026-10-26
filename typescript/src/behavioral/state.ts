import { isMain } from "../utils/is-main.ts";

export abstract class State {
  protected trafficLight!: TrafficLight;

  abstract readonly name: string;

  setContext(trafficLight: TrafficLight): void {
    this.trafficLight = trafficLight;
  }

  abstract nextState(): void;
  abstract previousState(): void;
}

export class TrafficLight {
  private state!: State;

  constructor(state: State) {
    this.setState(state);
  }

  setState(state: State): void {
    this.state = state;
    console.log(`Текущее состояние: ${state.name}`);
    state.setContext(this);
  }

  nextState(): void {
    this.state.nextState();
  }

  previousState(): void {
    this.state.previousState();
  }
}

export class GreenState extends State {
  readonly name = "Green";

  override nextState(): void {
    console.log("Из зелёного в жёлтый");
    this.trafficLight.setState(new YellowState());
  }

  override previousState(): void {
    console.log("Зеленый цвет");
  }
}

export class YellowState extends State {
  readonly name = "Yellow";

  override nextState(): void {
    console.log("Из жёлтого в красный цвет");
    this.trafficLight.setState(new RedState());
  }

  override previousState(): void {
    console.log("Из желтого в зеленый");
    this.trafficLight.setState(new GreenState());
  }
}

export class RedState extends State {
  readonly name = "Red";

  override nextState(): void {
    console.log("Красный цвет");
  }

  override previousState(): void {
    console.log("Из красного в желтый");
    this.trafficLight.setState(new YellowState());
  }
}

if (isMain(import.meta.url)) {
  const trafficLight = new TrafficLight(new YellowState());
  trafficLight.nextState();
  trafficLight.nextState();
  trafficLight.previousState();
  trafficLight.previousState();
  trafficLight.previousState();
}
