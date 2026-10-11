from enum import Enum
from math import sin, cos

from patterns.python.creational.builder import Phone


class CoordinateSystem(Enum):
    CARTESIAN = 1
    POLAR = 2


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # def __init__(self, a, b, system=CoordinateSystem.CARTESIAN):
    # if system == CoordinateSystem.CARTESIAN:
    #     self.x = a
    #     self.y = b
    # elif system == CoordinateSystem.POLAR:
    #     self.x = a * sin(b)
    #     self.y = a = cos(b)

    @staticmethod
    def new_cartesian_point(x, y):
        return Point(x, y)

    @staticmethod
    def new_polar_point(rho, theta):
        return Point(rho * cos(theta), rho * sin(theta))


    def __str__(self):
        return f"x: {self.x}, y: {self.y}"


if __name__ == '__main__':
    p = Point(2, 3)
    p1 = Point.new_polar_point(2, 3)
    p2 = Point.new_cartesian_point(2, 3)

    print(p1, p2)