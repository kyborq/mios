import { Display } from "./display";

export class DisplayBridge extends Display {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  render(): void {
    if (!this.context) {
      throw new Error("Canvas context is not available.");
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "black";
    this.context.fillRect(10, 10, 100, 100); // Example rectangle
  }
}
