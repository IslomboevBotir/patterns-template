from abc import ABC, abstractmethod


class ICommand(ABC):
    @abstractmethod
    def execute(self):
        pass


class Light:
    @staticmethod
    def turn_on():
        print("Light turned on")

    @staticmethod
    def turn_off():
        print("Light turn'ed off")


class LightOnCommand(ICommand):
    def __init__(self, light_: Light):
        self.light = light_

    def execute(self):
        self.light.turn_on()


class LightOffCommand(ICommand):
    def __init__(self, light_: Light):
        self.light = light_

    def execute(self):
        self.light.turn_off()


class RemoteControl:
    @staticmethod
    def press(command: ICommand):
        command.execute()


if __name__ == "__main__":
    light = Light()
    on = LightOnCommand(light)
    off = LightOffCommand(light)
    remote = RemoteControl()


    remote.press(on)
    remote.press(off)
