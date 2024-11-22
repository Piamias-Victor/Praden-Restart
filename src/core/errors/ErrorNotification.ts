export abstract class Notification {
  protected _msg = '';

  protected constructor(msg: string) {
    this._msg = msg;
  }

  get msg(): string {
    return this._msg;
  }
}

export class ErrorNotification extends Notification {
  constructor(msg: string) {
    super(msg);
  }
}
