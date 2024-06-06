import { TApplet } from "./applet.model";

export type TSystem = {
  applets: TApplet[];
  currentApplet: TApplet | null;
};
