export class WrappedResponse<T> {
  private readonly status: boolean;
  private readonly message: string;
  private readonly errors: Array<string>;
  private readonly data: T;
  
  private constructor(status: boolean, message: string, errors: Array<string>, data: T) {
    this.status = status;
    this.message = message;
    this.errors = errors;
    this.data = data;
  }

  static OK(): WrappedResponse<string> {
    return new WrappedResponse<string>(true, 'OK', [], null);
  }

  static OK_WITH<T>(data: T): WrappedResponse<T> {
    return new WrappedResponse<T>(true, 'OK2', [], data);
  }


}