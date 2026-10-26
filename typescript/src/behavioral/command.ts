import { isMain } from "../utils/is-main.ts";

export interface ICommand {
  execute(): void;
}

export class Light {
  turnOn(): void {
    console.log("Light turned on");
  }

  turnOff(): void {
    console.log("Light turned off");
  }
}

export class LightOnCommand implements ICommand {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}

export class LightOffCommand implements ICommand {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}

export class RemoteControl {
  press(command: ICommand): void {
    command.execute();
  }
}

if (isMain(import.meta.url)) {
  const light = new Light();
  const remote = new RemoteControl();

  remote.press(new LightOnCommand(light));
  remote.press(new LightOffCommand(light));
}
