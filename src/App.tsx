import { useSimulator } from "./hooks/useSimulator";

function App() {
  const { canvasRef } = useSimulator();
  return <canvas ref={canvasRef} width={512} height={256}></canvas>;
}

export default App;
