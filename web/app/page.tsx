const card: React.CSSProperties = {
    background: "linear-gradient(180deg, #111938 0%, #0f1730 100%)",
    border: "1px solid #243255",
    borderRadius: 14,
    padding: 18,
};

export default function HomePage() {
    return (
        <main style={{ maxWidth: 980, margin: "0 auto", padding: "48px 20px 72px" }}>
            <section style={{ marginBottom: 26 }}>
                <p style={{ letterSpacing: 1.2, textTransform: "uppercase", fontSize: 12, color: "#94a7d6", marginBottom: 10 }}>
                    First Next.js App
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, margin: 0 }}>
                    Welcome to <span style={{ color: "#8bc6ff" }}>Crypto Lab</span>
                </h1>
                <p style={{ fontSize: 18, color: "#c4d2f0", marginTop: 14, maxWidth: 820 }}>
                    A living research system for BTC market behavior — collecting fresh data every 4 hours, classifying volatility +
                    regimes, backtesting ideas, simulating risk, and emailing a daily analyst-style brief.
                </p>
            </section>

            <section style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginBottom: 20 }}>
                <article style={card}>
                    <h2 style={{ marginTop: 0 }}>1) Collector Service</h2>
                    <p style={{ marginBottom: 8 }}>
                        A persistent non-LLM collector runs on schedule, fetches BTCUSDT candles from Binance, and writes idempotent rows
                        to Postgres.
                    </p>
                    <p style={{ margin: 0, color: "#9ab0de" }}>Reliability: retries, endpoint fallback, and rate-limit awareness.</p>
                </article>

                <article style={card}>
                    <h2 style={{ marginTop: 0 }}>2) Postgres Data Core</h2>
                    <p style={{ marginBottom: 8 }}>
                        All core data lands in one place: raw bars, engineered features, run summaries, and trade logs.
                    </p>
                    <p style={{ margin: 0, color: "#9ab0de" }}>
                        Tables include <code>ohlcv_bars</code>, <code>feature_bars</code>, <code>backtest_runs</code>, and
                        <code> backtest_trades</code>.
                    </p>
                </article>

                <article style={card}>
                    <h2 style={{ marginTop: 0 }}>3) Daily Analysis Email</h2>
                    <p style={{ marginBottom: 8 }}>
                        A scheduled analysis worker generates a daily report, appends an LLM analysis section, and sends it by email.
                    </p>
                    <p style={{ margin: 0, color: "#9ab0de" }}>Result: concise insights, risks, and next-step experiments every day.</p>
                </article>
            </section>

            <section style={{ ...card, marginBottom: 20 }}>
                <h2 style={{ marginTop: 0 }}>How It Thinks About Trading</h2>
                <ul style={{ lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
                    <li>Classifies volatility into low / medium / high regimes.</li>
                    <li>Switches strategy behavior between trend and mean-reversion conditions.</li>
                    <li>Backtests rule sets with fees and position transitions.</li>
                    <li>Runs Monte Carlo simulations for drawdown and tail-risk estimates.</li>
                </ul>
            </section>

            <section style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a
                    href="/api/health"
                    style={{
                        display: "inline-block",
                        background: "#3b82f6",
                        color: "white",
                        textDecoration: "none",
                        padding: "10px 14px",
                        borderRadius: 10,
                        fontWeight: 600,
                    }}
                >
                    Check App Health
                </a>
                <span style={{ color: "#a9b8da" }}>Built to explain the system clearly — and invite better strategy iteration.</span>
            </section>
        </main>
    );
}
