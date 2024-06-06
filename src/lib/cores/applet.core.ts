import { TApplet } from "../models/applet.model";

abstract class Applet implements TApplet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract onMessage(message: string): void;

  initialize(): void {
    console.log(`${this.name} initialized.`);
  }
}

export default Applet;
