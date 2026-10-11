from abc import ABC


class Phone:
    def __init__(self):
        self.data: str = ''

    def about_phone(self) -> str:
        return self.data

    def append_data(self, data: str) -> None:
        self.data += data


class IDeveloper(ABC):
    def create_display(self):
        pass

    def create_box(self):
        pass

    def system_install(self):
        pass

    def get_phone(self) -> Phone:
        pass


class AndroidDeveloper(IDeveloper):
    def __init__(self):
        self.__phone = Phone()

    def create_display(self):
        self.__phone.append_data("Created display Samsung\n")

    def create_box(self):
        self.__phone.append_data("Created box Samsung\n")

    def system_install(self):
        self.__phone.append_data("Installed system Samsung\n")

    def get_phone(self) -> Phone:
        return self.__phone

class IphoneDeveloper(IDeveloper):
    def __init__(self):
        self.__phone = Phone()

    def create_display(self):
        self.__phone.append_data("Created display Iphone\n")

    def create_box(self):
        self.__phone.append_data("Created box Iphone\n")

    def system_install(self):
        self.__phone.append_data("Installed system Iphone\n")

    def get_phone(self) -> Phone:
        return self.__phone

class HuaweiDeveloper(IDeveloper):
    def __init__(self):
        self.__phone = Phone()

    def create_display(self):
        self.__phone.append_data("Created display Huawei\n")

    def create_box(self):
        self.__phone.append_data("Created box Huawei\n")

    def system_install(self):
        self.__phone.append_data("Installed system Huawei\n")

    def get_phone(self) -> Phone:
        return self.__phone

class Director:
    def __init__(self, developer: IDeveloper):
        self.__developer = developer

    def set_developer(self, developer: IDeveloper):
        self.__developer = developer

    def mount_only_phone(self) -> Phone:
        self.__developer.create_box()
        self.__developer.create_display()
        return  self.__developer.get_phone()

    def mount_full_phone(self) -> Phone:
        self.__developer.create_box()
        self.__developer.create_display()
        self.__developer.system_install()
        return self.__developer.get_phone()


if __name__ == "__main__":

    android_developer = AndroidDeveloper()
    director = Director(android_developer)
    samsung: Phone = director.mount_full_phone()
    print(samsung.about_phone())

    iphone_developer = IphoneDeveloper()
    director.set_developer(iphone_developer)
    iphone: Phone = director.mount_only_phone()
    print(iphone.about_phone())

    huawei_developer = HuaweiDeveloper()
    director.set_developer(huawei_developer)
    huawei: Phone = director.mount_only_phone()
    print(huawei.about_phone())


