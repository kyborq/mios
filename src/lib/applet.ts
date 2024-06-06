import { Interpreter } from "./interpreter";

export class Applet {
  private interpreter: Interpreter;

  constructor(source: string) {
    this.interpreter = new Interpreter(source);
  }

  run() {}
}
