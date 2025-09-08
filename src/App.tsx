import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center text-center">
      <div className="flex mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 mr-4" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-4">Vite + React + Tailwind</h1>
      <p className="text-lg">Agora você está no controle do estilo!</p>
    </div>
  )
}


export default App
