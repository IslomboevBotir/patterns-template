from abc import ABC, abstractmethod
from typing import Deque


class IMemento(ABC):
    @abstractmethod
    def get_dollars(self) -> int:
        pass

    @abstractmethod
    def get_euro(self) -> int:
        pass


class ExchangeMemento(IMemento):
    def __init__(self, d: int, e: int):
        self.__dollars = d
        self.__euro = e

    def get_dollars(self) -> int:
        return self.__dollars

    def get_euro(self) -> int:
        return self.__euro


class Exchange:
    def __init__(self, d: int, e: int):
        self.__dollars = d
        self.__euro = e

    def get_dollars(self):
        print("Долларов: {}".format(self.__dollars))

    def get_euro(self):
        print("Евро: {}".format(self.__euro))

    def sell(self):
        if self.__dollars > 0:
            self.__dollars -= 1

    def buy(self):
        self.__euro += 1

    def save(self) -> ExchangeMemento:
        return ExchangeMemento(self.__dollars, self.__euro)

    def restore(self, exchange_memento: IMemento):
        self.__dollars = exchange_memento.get_dollars()
        self.__euro = exchange_memento.get_euro()


class Memory:
    def __init__(self, exchange: Exchange):
        self.__exchange = exchange
        self.__history: Deque[IMemento] = []

    def backup(self):
        self.__history.append(self.__exchange.save())

    def undo(self):
        if len(self.__history) == 0:
            return
        else:
            self.__exchange.restore(self.__history.pop())


if __name__ == '__main__':
    exchange = Exchange(10, 10)
    memory = Memory(exchange)
    exchange.get_dollars()
    exchange.get_euro()
    print('Sell dollar, buy euro')
    exchange.sell()
    exchange.buy()

    exchange.get_dollars()
    exchange.get_euro()

    print('compare sustaince')

    memory.backup()

    exchange.sell()
    exchange.buy()
    exchange.get_dollars()
    exchange.get_euro()

    print('состяние из памяти ')
    memory.undo()
    exchange.get_dollars()
    exchange.get_euro()
