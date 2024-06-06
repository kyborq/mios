import { Applet } from "./applet";
import { Display } from "./display";

type Options = {
  bits: number;
  blocks: number;
  display: Display;
};

export class Simulator {
  private bits: number = 0; // RAM emulation
  private blocks: number = 0; // ROM emulation

  private display: Display; // Like an actual display for bridge to web canvas
  private space: Applet[] = []; // Running applets
  private applets: Record<string, Applet> = {}; // Installed applets

  constructor({ bits, blocks, display }: Options) {
    this.bits = bits;
    this.blocks = blocks;
    this.display = display;
  }

  run() {
    this.display.render();
  }
}
