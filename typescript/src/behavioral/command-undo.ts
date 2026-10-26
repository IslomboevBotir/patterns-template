import { isMain } from "../utils/is-main.ts";

export interface ICommand {
  positive(): void;
  negative(): void;
}

export class Conveyor {
  on(): void {
    console.log("Conveyor on");
  }

  off(): void {
    console.log("Conveyor off");
  }

  speedIncrease(): void {
    console.log("Speed increase");
  }

  speedDecrease(): void {
    console.log("Speed decrease");
  }
}

export class ConveyorWorkCommand implements ICommand {
  constructor(private readonly conveyor: Conveyor) {}

  positive(): void {
    this.conveyor.on();
  }

  negative(): void {
    this.conveyor.off();
  }
}

export class ConveyorAdjustCommand implements ICommand {
  constructor(private readonly conveyor: Conveyor) {}

  positive(): void {
    this.conveyor.speedIncrease();
  }

  negative(): void {
    this.conveyor.speedDecrease();
  }
}

export class Multipult {
  private readonly commands = new Map<number, ICommand>();
  private readonly history: ICommand[] = [];

  setCommand(button: number, command: ICommand): void {
    this.commands.set(button, command);
  }

  pressOn(button: number): void {
    const command = this.commands.get(button);
    if (!command) {
      console.log(`Button ${button} is not assigned`);
      return;
    }
    command.positive();
    this.history.push(command);
  }

  pressCancel(): void {
    const command = this.history.pop();
    if (!command) {
      console.log("Nothing to cancel");
      return;
    }
    command.negative();
  }
}

if (isMain(import.meta.url)) {
  const conveyor = new Conveyor();
  const multipult = new Multipult();
  multipult.setCommand(0, new ConveyorWorkCommand(conveyor));
  multipult.setCommand(1, new ConveyorAdjustCommand(conveyor));

  multipult.pressOn(0);
  multipult.pressOn(1);
  multipult.pressCancel();
  multipult.pressCancel();
  multipult.pressCancel();
}
