from abc import ABC, abstractmethod


class IVisitor(ABC):
    @abstractmethod
    def visit(self, place: "IPlace"):
        raise NotImplementedError


class IPlace(ABC):
    @abstractmethod
    def accept(self, visitor: IVisitor):
        raise NotImplementedError


class Zoo(IPlace):
    def accept(self, visitor: IVisitor):
        visitor.visit(self)


class Cinema(IPlace):
    def accept(self, visitor: IVisitor):
        visitor.visit(self)


class Circus(IPlace):
    def accept(self, visitor: IVisitor):
        visitor.visit(self)




class HolidayMaker(IVisitor):
    def __init__(self):
        self.value = ''

    def visit(self, place: IPlace):
        if isinstance(place, Zoo):
            self.value = 'Слон в зоопарке'
        elif isinstance(place, Cinema):
            self.value = 'Кино - властелин колец'
        elif isinstance(place, Circus):
            self.value = 'Клоун в цирке'


if __name__ == '__main__':
    places: list[IPlace] = [Zoo(), Cinema(), Circus()]

    for place in places:
        visitor = HolidayMaker()
        place.accept(visitor)
        print(visitor.value)
