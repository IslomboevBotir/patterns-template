from abc import ABC, abstractmethod


class IEngine(ABC):
    @abstractmethod
    def release_engine(self):
        pass


class JapaneseEngine(IEngine):
    def release_engine(self):
        print("Japanise Engine")


class RussiaEngine(IEngine):
    def release_engine(self):
        print("Russia Engine")


class ICar(ABC):
    @abstractmethod
    def release_car(self, engine: IEngine):
        pass


class JapaneseCar(ICar):
    def release_car(self, engine: IEngine):
        print("Compose Japanese Car")
        engine.release_engine()


class RussiaCar(ICar):
    def release_car(self, engine: IEngine):
        print("Release Car")
        engine.release_engine()


class IFactory(ABC):
    @abstractmethod
    def create_engine(self) -> IEngine:
        pass

    @abstractmethod
    def create_car(self) -> ICar:
        pass


class JapaneseFactory(IFactory):
    def create_engine(self):
        return JapaneseEngine()

    def create_car(self):
        return JapaneseCar()


class RussiaFactory(IFactory):
    def create_engine(self):
        return RussiaEngine()

    def create_car(self):
        return RussiaCar()


if __name__ == "__main__":
    j_factory = JapaneseFactory()
    j_engine = j_factory.create_engine()
    j_car = j_factory.create_car()
    j_car.release_car(j_engine)
