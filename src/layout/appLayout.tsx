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
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(17, 17, 17, 0.08)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
         
        </div>
      </header>

      <main style={{ width: "100%", flex: 1 }}>
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}
