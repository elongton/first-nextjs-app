export default function HomePage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Next.js SSR (TypeScript)</h1>
            <p>Deployed via GHCR → VPS → Docker Compose → Traefik.</p>
            <p>
                Health check: <a href="/app/api/health">/app/api/health</a>
            </p>
        </main>
    );
}
