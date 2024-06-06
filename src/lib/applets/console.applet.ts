import Applet from "../cores/applet.core";

export class ConsoleApplet extends Applet {
  constructor(name: string) {
    super(name);
  }

  onMessage(message: string) {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.id === "input") {
      console.log(`${this.name} received input: ${parsedMessage.key}`);
    } else {
      console.log(`${this.name} received message: ${message}`);
    }
  }

  initialize(): void {
    super.initialize();
    console.log(`${this.name} custom initialization.`);
  }
}
