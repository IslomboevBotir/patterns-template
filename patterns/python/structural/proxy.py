import time


class CurrencyService:
    def rate(self) -> int:
        print("Currency Service started")
        time.sleep(2)
        return 12020


class CurrencyProxy:
    _currency_service = CurrencyService()
    _rates = None
    _update_time = None

    def rate(self) -> int:
        if self._rates is None:
            print("Currency Service is None")
            self._rates = self._currency_service.rate()
            self._update_time = time.time()
        else:
            print("Currency Service get from cache")
        print(self._rates, self._update_time)
        return self._rates

if __name__ == "__main__":
    proxy = CurrencyProxy()
    print(proxy.rate())
    print(proxy.rate())
    print(proxy.rate())
    print(proxy.rate())