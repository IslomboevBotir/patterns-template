from abc import ABC, abstractmethod
from typing import Deque


class ICommand(ABC):
    @abstractmethod
    def positive(self):
        pass

    @abstractmethod
    def negative(self):
        pass


class Conveyor:
    def on(self):
        print("Conveyor on")

    def off(self):
        print("Conveyor off")

    def speed_increase(self):
        print("Speed increase")

    def speed_decrease(self):
        print("Speed decrease")


class ConveyorWorkCommand(ICommand):
    def __init__(self, conveyor: Conveyor):
        self.conveyor: Conveyor = conveyor

    def positive(self):
        self.conveyor.on()

    def negative(self):
        self.conveyor.off()


class ConveyorAdjustCommand(ICommand):
    def __init__(self, conveyor: Conveyor):
        self.conveyor: Conveyor = conveyor

    def positive(self):
        self.conveyor.speed_increase()

    def negative(self):
        self.conveyor.speed_decrease()


class Multipult:
    def __init__(self):
        self.__commands: list[ICommand] = [None, None]
        self.__history: Deque[ICommand] = []

    def set_command(self, button: int, command: ICommand):
        self.__commands[button] = command

    def press_on(self, button: int):
        self.__commands[button].positive()
        self.__history.append(self.__commands[button])

    def press_cancel(self):
        if len(self.__commands) != 0:
            self.__commands[0].negative()


if __name__ == "__main__":
    conveyor = Conveyor()
    multipult = Multipult()
    multipult.set_command(0, ConveyorWorkCommand(conveyor))
    multipult.set_command(1, ConveyorAdjustCommand(conveyor))

    multipult.press_on(0)
    multipult.press_on(1)
    multipult.press_cancel()
    multipult.press_cancel()
