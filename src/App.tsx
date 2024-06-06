import { useConsole } from "./hooks/useConsole";

function App() {
  const { canvasRef } = useConsole();

  return <canvas ref={canvasRef} width={512} height={256}></canvas>;
}

export default App;
