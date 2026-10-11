class DVDPlayer:
    @staticmethod
    def on():
        print("DVDPlayer is on")

    @staticmethod
    def off():
        print("DVDPlayer is off")

    @staticmethod
    def insert_disc():
        print("DVDPlayer is inserting disc")

    @staticmethod
    def remove_disc():
        print("DVDPlayer is removing disc")


class Televisor:
    def on(self):
        print("Televisor is on")

    def off(self):
        print("Televisor is off")

    def connect_dvd(self):
        print("Televisor is connecting dvd")

    def disconnect_dvd(self):
        print("Televisor is disconnecting dvd")

    def play(self):
        print("Televisor is playing")


class TVDVDFacade:
    def __init__(self, televisor, dvd):
        self.televisor = televisor
        self.dvd = dvd

    def watch_movie(self):
        self.dvd.on()
        self.dvd.insert_disc()
        self.televisor.on()
        self.televisor.connect_dvd()
        self.televisor.play()

    def turn_off(self):
        self.televisor.disconnect_dvd()
        self.televisor.off()
        self.dvd.remove_disc()
        self.dvd.off()



if __name__ == "__main__":
    facade = TVDVDFacade(Televisor(), DVDPlayer())
    # facade.watch_movie()
    facade.turn_off()
