import { Outlet } from "react-router-dom";
import AppFooter from "../shared/AppFooter";

export default function AppLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header placeholder (luego hacemos Navbar profesional) */}
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <strong>Exploremos Costa Rica</strong>
        </div>
      </header>

      {/* Main: ocupa todo el espacio sobrante */}
      <main style={{ width: "100%", padding: "24px", flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer reutilizable: se va al fondo */}
      <AppFooter />
    </div>
  );
}
