import { isMain } from "../utils/is-main.ts";

export interface Request {
  user?: string;
  action?: string;
}

export type HandlerResult = { error: string } | { message: string } | null;

export abstract class Handler {
  private next: Handler | null = null;

  setNextHandler(next: Handler): Handler {
    this.next = next;
    return next;
  }

  abstract handle(request: Request): HandlerResult;

  protected passToNext(request: Request): HandlerResult {
    return this.next ? this.next.handle(request) : null;
  }
}

export class AuthHandler extends Handler {
  override handle(request: Request): HandlerResult {
    console.log("auth request received");
    if (!request.user) {
      return { error: "user is required" };
    }
    return this.passToNext(request);
  }
}

export class LoginHandler extends Handler {
  override handle(request: Request): HandlerResult {
    console.log("login request received");
    return this.passToNext(request);
  }
}

export class BusinessHandler extends Handler {
  override handle(request: Request): HandlerResult {
    if (request.action !== "processing") {
      return { message: `Business not Processing by ${request.user}` };
    }
    return this.passToNext(request) ?? { message: `${request.user} can do anything` };
  }
}

if (isMain(import.meta.url)) {
  const auth = new AuthHandler();
  auth.setNextHandler(new LoginHandler()).setNextHandler(new BusinessHandler());

  const requests: Request[] = [
    { action: "processing" },
    { user: "Shaxzodbek", action: "done" },
    { user: "Behroz", action: "processing" },
  ];
  for (const request of requests) {
    console.log(auth.handle(request));
  }
}
