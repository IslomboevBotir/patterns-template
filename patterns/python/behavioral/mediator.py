from abc import ABC, abstractmethod


class IMediator(ABC):
    @abstractmethod
    def add_user(self, user: str):
        pass

    @abstractmethod
    def send_message(self, msg: str, sender: "IUser"):
        pass


class ChatRoom(IMediator):
    def __init__(self):
        self.users = []

    def add_user(self, user: "IUser"):
        self.users.append(user)

    def send_message(self, msg: str, sender: "IUser"):
        for u in self.users:
            if u is not sender:
                u.receive(msg, sender)


class IUser(ABC):
    def __init__(self, mediator: IMediator, name: str):
        self.mediator = mediator
        self.name = name

    @abstractmethod
    def send(self, msg: str):
        pass

    @abstractmethod
    def receive(self, msg: str, sender: "IUser"):
        pass


class ChatUser(IUser):
    def send(self, msg: str):
        print(f"{self.name} отправляет сообщение: {msg}")
        self.mediator.send_message(msg, self)

    def receive(self, msg: str, sender: IUser):
        print(f"{self.name} получил сообщение от {sender.name}: {msg}")


if __name__ == "__main__":
    chat = ChatRoom()

    alice = ChatUser(chat, "Alice")
    bob = ChatUser(chat, "Bob")
    carol = ChatUser(chat, "Carol")

    chat.add_user(alice)
    chat.add_user(bob)
    chat.add_user(carol)

    alice.send("Привет всем!")
    bob.send("Привет, Alice!")
