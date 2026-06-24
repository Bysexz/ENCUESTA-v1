import React, { useState } from "react";

// Simple UI with internal components – no external imports needed
function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="flex-center" style={{ flexDirection: "column", gap: "2rem" }}>
      <h1 style={{ color: "var(--color-primary)", fontSize: "2.5rem" }}>¡Bienvenido a Métrica!</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={onEnter}>Iniciar Sesión</button>
        <button onClick={onEnter}>Registrarse</button>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="flex-center" style={{ flexDirection: "column", gap: "1rem" }}>
      <h2>Tablero</h2>
      <p>Aquí aparecerán tus encuestas creadas y el botón para crear una nueva.</p>
      <button>Crear Encuesta</button>
    </section>
  );
}

const App: React.FC = () => {
  const [stage, setStage] = useState<"welcome" | "dashboard">("welcome");
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {stage === "welcome" && <WelcomeScreen onEnter={() => setStage("dashboard")} />}
      {stage === "dashboard" && <Dashboard />}
    </div>
  );
};

export default App;
