import { isMain } from "../utils/is-main.ts";

export interface IDataReader {
  read(): void;
}

export class DataBaseReader implements IDataReader {
  read(): void {
    console.log("Reading data from database");
  }
}

export class FileReader implements IDataReader {
  read(): void {
    console.log("Reading data from file");
  }
}

export abstract class Sender {
  constructor(protected reader: IDataReader) {}

  setDataReader(reader: IDataReader): void {
    this.reader = reader;
  }

  abstract send(): void;
}

export class EmailSender extends Sender {
  override send(): void {
    this.reader.read();
    console.log("Email sent successfully");
  }
}

export class TelegramBotSender extends Sender {
  override send(): void {
    this.reader.read();
    console.log("Telegram bot sent successfully");
  }
}

if (isMain(import.meta.url)) {
  let sender: Sender = new EmailSender(new DataBaseReader());
  sender.send();

  sender.setDataReader(new FileReader());
  sender.send();

  sender = new TelegramBotSender(new DataBaseReader());
  sender.send();
  sender.setDataReader(new FileReader());
  sender.send();
}
