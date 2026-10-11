from abc import ABC, abstractmethod


class IStrategy(ABC):
    @abstractmethod
    def execute(self, a: int, b: int):
        raise NotImplementedError


class AddStrategy(IStrategy):
    def execute(self, a: int, b: int):
        return a + b


class SubStrategy(IStrategy):
    def execute(self, a: int, b: int):
        return a - b


class MultiStrategy(IStrategy):
    def execute(self, a: int, b: int):
        return a * b


class DivStrategy(IStrategy):
    def execute(self, a: int, b: int):
        return a / b


class Calculator:
    def __init__(self, strategy: IStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: IStrategy):
        self.strategy = strategy

    def calculate(self, a: int, b: int):
        return self.strategy.execute(a, b)


if __name__ == '__main__':
    calc = Calculator(MultiStrategy())
    print(calc.calculate(2, 3))
    calc.set_strategy(SubStrategy())
    print(calc.calculate(2, 3))
    calc.set_strategy(MultiStrategy())
    print(calc.calculate(2, 3))
    calc.set_strategy(DivStrategy())
    print(calc.calculate(2, 3))
