from abc import ABC, abstractmethod


class IObserver(ABC):
    @abstractmethod
    def update(self, i: int):
        pass


class IObservable(ABC):
    @abstractmethod
    def add_observer(self, o: IObserver):
        pass

    @abstractmethod
    def remove_observer(self, o: IObserver):
        pass

    @abstractmethod
    def notify(self):
        pass


class Product(IObservable):
    def __init__(self, price: int):
        self.__price = price
        self.__iobservers: list[IObserver] = []

    def change_price(self, price: int):
        self.__price = price
        self.notify()

    def add_observer(self, o: IObserver):
        self.__iobservers.append(o)

    def remove_observer(self, o: IObserver):
        self.__iobservers.remove(o)

    def notify(self):
        for o in self.__iobservers:
            o.update(self.__price)


class Wholesale(IObserver):
    def __init__(self, obj: IObservable):
        self.__product = obj
        obj.add_observer(self)

    def update(self, i: int):
        if i < 300:
            print("Оптовик закупил товар по цене {}".format(i))
            self.__product.remove_observer(self)


class Buyer(IObserver):
    def __init__(self, obj: IObservable):
        self.product = obj
        obj.add_observer(self)

    def update(self, i: int):
        if i < 350:
            print("Покупатель закупил товар по цене {}".format(i))
            self.product.remove_observer(self)

if __name__ == "__main__":

    product = Product(400)
    wholesale = Wholesale(product)
    buyer = Buyer(product)
    product.change_price(320)
    product.change_price(280)