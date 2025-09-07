// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">PJC-MT Desaparecidos</h1>
      </nav>
    </header>
    <main>
      <Outlet /> {/* As páginas da rota serão renderizadas aqui */}
    </main>
  </div>
);

export default AppLayout;