import { useEffect, useRef } from "react";

import { ConsoleApplet } from "../lib/applets/console.applet";
import { System } from "../lib/cores/system.core";

export const useConsole = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const system = useRef(new System()).current;

  useEffect(() => {
    const baseApplet = new ConsoleApplet("Console");
    system.spawn(baseApplet);
    console.log(system);
  }, [system]);

  return { canvasRef };
};
