from abc import ABC, abstractmethod


class IDataReader(ABC):
    @abstractmethod
    def read(self):
        pass


class DataBaseReader(IDataReader):
    def read(self):
        print("Reading data from database")


class FileReader(IDataReader):
    def read(self):
        print("Reading data from file")


class Sender(ABC):
    def __init__(self, reader: IDataReader):
        self.reader: IDataReader = reader

    def set_data_reader(self, reader: IDataReader):
        self.reader: IDataReader = reader

    @abstractmethod
    def send(self):
        pass


class EmailSender(Sender):
    def __init__(self, data_reader: IDataReader):
        super().__init__(data_reader)

    def send(self):
        self.reader.read()
        print("Email sent successfully")


class TelegramBotSender(Sender):
    def __init__(self, data_reader: IDataReader):
        super().__init__(data_reader)

    def send(self):
        self.reader.read()
        print("Telegram bot sent successfully")


if __name__ == "__main__":
    sender: Sender = EmailSender(DataBaseReader())
    sender.send()

    sender.set_data_reader(FileReader())
    sender.send()

    sender = TelegramBotSender(DataBaseReader())
    sender.send()
    sender.set_data_reader(FileReader())
    sender.send()
    