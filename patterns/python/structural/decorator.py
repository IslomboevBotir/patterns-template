from abc import ABC, abstractmethod


class ICoffee(ABC):
    @abstractmethod
    def cost(self):
        raise NotImplementedError


class SimpleCoffee(ICoffee):
    def cost(self):
        return 10


class CoffeeDecorator(ICoffee):
    def __init__(self, coffee: ICoffee):
        self.coffee = coffee

    @abstractmethod
    def cost(self):
        raise NotImplementedError


class MilkCoffee(CoffeeDecorator):
    def cost(self):
        return self.coffee.cost() + 5


class ChocolateCoffee(CoffeeDecorator):
    def cost(self):
        return self.coffee.cost() + 7

if __name__ == '__main__':
    coffee = SimpleCoffee()
    print(coffee.cost())
    coffer_with_milk = MilkCoffee(coffee=coffee)
    print(coffer_with_milk.cost())
    coffee_with_chocolate = ChocolateCoffee(coffee=coffee)
    print(coffee_with_chocolate.cost())
