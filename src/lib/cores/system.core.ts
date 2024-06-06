import { TApplet } from "../models/applet.model";
import { TSystem } from "../models/system.model";

class System implements TSystem {
  applets: TApplet[];
  currentApplet: TApplet | null;

  constructor() {
    this.applets = [];
    this.currentApplet = null;
  }

  isExists(name: string) {
    return !!this.applets.find((applet) => applet.name === name);
  }

  spawn(applet: TApplet) {
    if (!this.isExists(applet.name)) {
      this.applets.push(applet);
      this.open(applet.name);
    }
  }

  destroy(name: string) {
    this.applets = this.applets.filter((applet) => applet.name !== name);
  }

  open(name: string) {
    const applet = this.applets.find((applet) => applet.name === name);
    this.currentApplet = applet || null;
  }

  close() {
    if (this.currentApplet) {
      this.destroy(this.currentApplet.name);
      this.currentApplet = null;
    }
  }
}

export { System };
