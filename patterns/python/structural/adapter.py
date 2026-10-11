class ResponseDTO:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def get_response_dto(self):
        return {
            'name': self.name,
            'age': self.age,
            'gender': self.gender
        }


class ResponseHandler:
    def __init__(self, adapter: "Adapter"):
        self.adapter = adapter

    def get_response(self):
        return self.adapter.get_new_response()


class NewResponseDTO:
    def __init__(self, name, age, gender, nationality):
        self.name = name
        self.age = age
        self.gender = gender
        self.nationality = nationality


class Adapter:
    def __init__(self, response_dto: NewResponseDTO):
        self.response_dto = response_dto

    def get_new_response(self):
        return {
            "name": self.response_dto.name,
            "age": self.response_dto.age,
            "gender": self.response_dto.gender
        }


if __name__ == '__main__':
    # response = ResponseDTO('', 21, 'male', 'uzbek')
    # response_handler = ResponseHandler(response)
    # print(response_handler.get_response())

    response_dto = NewResponseDTO("", 21, "Male", "uzbek")
    adapter = Adapter(response_dto)
    response_handler = ResponseHandler(adapter)
    print(response_handler.get_response())