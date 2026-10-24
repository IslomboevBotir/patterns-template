import { isMain } from "../utils/is-main.ts";

export class DVDPlayer {
  on(): void {
    console.log("DVDPlayer is on");
  }

  off(): void {
    console.log("DVDPlayer is off");
  }

  insertDisc(): void {
    console.log("DVDPlayer is inserting disc");
  }

  removeDisc(): void {
    console.log("DVDPlayer is removing disc");
  }
}

export class Televisor {
  on(): void {
    console.log("Televisor is on");
  }

  off(): void {
    console.log("Televisor is off");
  }

  connectDvd(): void {
    console.log("Televisor is connecting dvd");
  }

  disconnectDvd(): void {
    console.log("Televisor is disconnecting dvd");
  }

  play(): void {
    console.log("Televisor is playing");
  }
}

export class TVDVDFacade {
  constructor(
    private readonly televisor: Televisor,
    private readonly dvd: DVDPlayer,
  ) {}

  watchMovie(): void {
    this.dvd.on();
    this.dvd.insertDisc();
    this.televisor.on();
    this.televisor.connectDvd();
    this.televisor.play();
  }

  turnOff(): void {
    this.televisor.disconnectDvd();
    this.televisor.off();
    this.dvd.removeDisc();
    this.dvd.off();
  }
}

if (isMain(import.meta.url)) {
  const facade = new TVDVDFacade(new Televisor(), new DVDPlayer());
  facade.watchMovie();
  facade.turnOff();
}
