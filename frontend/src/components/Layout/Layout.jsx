export default function Layout({ children }) {
  return (
    <>
      <header style={{ padding: "1rem", background: "#111", color: "#fff" }}>
        <h2>Client Landing System</h2>
      </header>

      <main style={{ padding: "2rem" }}>
        {children}
      </main>
    </>
  );
}
