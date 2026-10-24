import { isMain } from "../utils/is-main.ts";

export interface Response {
  name: string;
  age: number;
  gender: string;
}

export interface IResponseProvider {
  getResponse(): Response;
}

export class ResponseDTO implements IResponseProvider {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly gender: string,
  ) {}

  getResponse(): Response {
    return { name: this.name, age: this.age, gender: this.gender };
  }
}

export class ResponseHandler {
  constructor(private readonly provider: IResponseProvider) {}

  getResponse(): Response {
    return this.provider.getResponse();
  }
}

export class NewResponseDTO {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly gender: string,
    readonly nationality: string,
  ) {}
}

export class Adapter implements IResponseProvider {
  constructor(private readonly responseDto: NewResponseDTO) {}

  getResponse(): Response {
    return {
      name: this.responseDto.name,
      age: this.responseDto.age,
      gender: this.responseDto.gender,
    };
  }
}

if (isMain(import.meta.url)) {
  const oldHandler = new ResponseHandler(new ResponseDTO("Ali", 21, "male"));
  console.log(oldHandler.getResponse());

  const adapter = new Adapter(new NewResponseDTO("Vali", 21, "Male", "uzbek"));
  const newHandler = new ResponseHandler(adapter);
  console.log(newHandler.getResponse());
}
