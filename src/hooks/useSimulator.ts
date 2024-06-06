import { useEffect, useRef } from "react";

import { DisplayBridge } from "../lib/display.bridge";
import { Simulator } from "../lib/simulator";

export const useSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simulator = useRef(
    new Simulator({
      bits: 100,
      blocks: 10,
      display: new DisplayBridge(canvasRef.current!),
    })
  ).current;

  useEffect(() => {
    simulator.run();
  }, []);

  return { canvasRef };
};
