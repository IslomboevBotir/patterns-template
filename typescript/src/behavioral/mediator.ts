import { isMain } from "../utils/is-main.ts";

export interface IMediator {
  addUser(user: IUser): void;
  sendMessage(msg: string, sender: IUser): void;
}

export class ChatRoom implements IMediator {
  private readonly users: IUser[] = [];

  addUser(user: IUser): void {
    this.users.push(user);
  }

  sendMessage(msg: string, sender: IUser): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(msg, sender);
      }
    }
  }
}

export abstract class IUser {
  constructor(
    protected readonly mediator: IMediator,
    readonly name: string,
  ) {}

  abstract send(msg: string): void;
  abstract receive(msg: string, sender: IUser): void;
}

export class ChatUser extends IUser {
  override send(msg: string): void {
    console.log(`${this.name} отправляет сообщение: ${msg}`);
    this.mediator.sendMessage(msg, this);
  }

  override receive(msg: string, sender: IUser): void {
    console.log(`${this.name} получил сообщение от ${sender.name}: ${msg}`);
  }
}

if (isMain(import.meta.url)) {
  const chat = new ChatRoom();

  const alice = new ChatUser(chat, "Alice");
  const bob = new ChatUser(chat, "Bob");
  const carol = new ChatUser(chat, "Carol");

  chat.addUser(alice);
  chat.addUser(bob);
  chat.addUser(carol);

  alice.send("Привет всем!");
  bob.send("Привет, Alice!");
}
