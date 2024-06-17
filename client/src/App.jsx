import Canvas from './canvas/index.jsx';
import Customizer from './pages/Customizer';
import Home from './pages/Home.jsx';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer />
      <Canvas />
    </main>
  )
}

export default App
