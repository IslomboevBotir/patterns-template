from abc import ABC, abstractmethod


class Component(ABC):
    @abstractmethod
    def read(self):
        raise NotImplementedError()


class File(Component):
    def __init__(self, name: str):
        self.name = name

    def read(self):
        print(f"{self.name} File reading")


class Folder(Component):
    def __init__(self, name: str):
        self.name = name
        self.files = []

    def add(self, component: Component):
        self.files.append(component)

    def remove(self, component: Component):
        self.files.remove(component)

    def read(self):
        print(f"{self.name} Folder reading")
        for file in self.files:
            file.read()


if __name__ == "__main__":
    folder = Folder("mypy")
    file1 = File("file1.txt")
    file2 = File("file2.csv")
    file3 = File("file3.py")
    folder.add(file1)
    folder.add(file2)
    folder.add(file3)
    folder.read()
    folder.remove(file1)
    folder.read()
    folder2 = Folder("mypy2")
    folder.add(folder2)
    folder.read()
    file4 = File("file4.py")
