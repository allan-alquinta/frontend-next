export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: 16, background: "#333", color: "#fff" }}>
          <strong>Sistema de Gestión Eléctrica</strong>
          <nav style={{ marginTop: 8 }}>
            <a href="/" style={{ color: "#fff", marginRight: 10 }}>Dashboard</a>
            <a href="/clientes" style={{ color: "#fff", marginRight: 10 }}>Clientes</a>
            <a href="/contratos" style={{ color: "#fff", marginRight: 10 }}>Contratos</a>
            <a href="/pagos" style={{ color: "#fff", marginRight: 10 }}>Pagos</a>
            <a href="/medidores" style={{ color: "#fff" }}>Medidores</a>
          </nav>
        </header>

        <main style={{ padding: 24 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
