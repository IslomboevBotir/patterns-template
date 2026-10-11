from abc import ABC, abstractmethod
from typing import List


class PizzaItem:
    def __init__(self, number):
        self.number = number

    def __str__(self):
        return f"Кусочек пиццы под номером: {str(self.number)}"


class Iterator(ABC):
    @abstractmethod
    def next(self) -> PizzaItem:
        pass

    @abstractmethod
    def has_next(self) -> bool:
        pass


class PizzaSliceIterator(Iterator):
    def __init__(self, pizza_items: List[PizzaItem]):
        self.pizza_items = pizza_items
        self._index = 0

    def next(self) -> PizzaItem:
        pizza_item = self.pizza_items[self._index]
        self._index += 1
        return pizza_item

    def has_next(self) -> bool:
        return False if self._index >= len(self.pizza_items) else True


class PizzaAggregate:
    def __init__(self, amount_slices: int = 10):
        self.slices = [PizzaItem(it + 1) for it in range(amount_slices)]
        print(f"Приготовили пицуу и порезали "
              f"на {amount_slices} кусочков")

    def amount_slices(self) -> int:
        return len(self.slices)

    def iterator(self) -> Iterator:
        return PizzaSliceIterator(self.slices)


if __name__ == "__main__":
    pizza = PizzaAggregate(5)
    iterator = pizza.iterator()
    while iterator.has_next():
        item = iterator.next()
        print("Это " + str(item))

