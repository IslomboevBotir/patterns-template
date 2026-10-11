from abc import ABC, abstractmethod


class IHandler(ABC):

    def __init__(self):
        self.next_ = None

    def set_next_handler(self, next_: "IHandler"):
        self.next_ = next_
        return self.next_

    @abstractmethod
    def handle(self, request):
        raise NotImplementedError(f"{self.__class__.__name__} is an abstract class")


class AuthHandler(IHandler):

    def handle(self, request):
        print("auth request received")
        if not request.get("user"):
            return {"error": "user is required"}
        if self.next_:
            return self.next_.handle(request)
        return None


class LoginHandler(IHandler):
    def handle(self, request):
        print("login request received")
        if self.next_:
            return self.next_.handle(request)
        return None


class BusinessHandler(IHandler):
    def handle(self, request):
        if request.get("action") != 'processing':
            return {"message": f"Business not Processing by {request.get('user')}"}
        if self.next_:
            return self.next_.handle(request)
        return {"message": f"{request.get('user')} can do anything"}


if __name__ == "__main__":
    auth = AuthHandler()
    login = LoginHandler()
    business = BusinessHandler()
    auth.set_next_handler(login).set_next_handler(business)
    requests = [
        {"action": "processing"},
        {"user": "Shaxzodbek", "action": "done"},
        {"user": "Behroz", "action": "processing"},
    ]
    for request in requests:
        res = auth.handle(request)
        print(res)
