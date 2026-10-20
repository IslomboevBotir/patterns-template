from abc import ABC, abstractmethod


class State(ABC):
    def __init__(self):
        self._traffic_light: 'TrafficLight' = None

    @abstractmethod
    def next_state(self):
        pass

    @abstractmethod
    def previous_state(self):
        pass


class TrafficLight:
    def __init__(self, st: State):
        self.set_state(st)

    def set_state(self, st: State):
        self.__state = st
        print(self.__state)
        self.__state._traffic_light = self

    def next_state(self):
        self.__state.next_state()

    def previous_state(self):
        self.__state.previous_state()


class GreenState(State):
    def next_state(self):
        print('Из зелёного в жёлтый')
        self._traffic_light.set_state(YellowState())

    def previous_state(self):
        print('Зеленый цвет')


class YellowState(State):
    def next_state(self):
        print('Из жёлтого в красный цвет')
        self._traffic_light.set_state(RedState())

    def previous_state(self):
        print('Из желтого в зеленый')
        self._traffic_light.set_state(GreenState())


class RedState(State):
    def next_state(self):
        print('Красный цвет')

    def previous_state(self):
        print('Из красного в желтый')
        self._traffic_light.set_state(YellowState())


if __name__ == '__main__':
    traffic_light = TrafficLight(YellowState())
    traffic_light.next_state()
    traffic_light.next_state()
    traffic_light.previous_state()
    traffic_light.previous_state()
    traffic_light.previous_state()
