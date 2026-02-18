export default function HomePage() {
    return (
        <main className="page">
            <div className="container">
                <section>
                    <p className="badge">First Next.js App</p>
                    <h1>
                        Welcome to <span style={{ color: "#c7d0ff" }}>Crypto Lab</span>
                    </h1>
                    <p className="lead">
                        A living research system for BTC market behavior — collecting fresh data every 4 hours, classifying volatility +
                        regimes, backtesting ideas, simulating risk, and emailing a daily analyst-style brief.
                    </p>
                </section>

                <section className="grid">
                    <article className="card">
                        <h2>1) Collector Service</h2>
                        <p>
                            A persistent non-LLM collector runs on schedule, fetches BTCUSDT candles from Binance, and writes idempotent
                            rows to Postgres.
                        </p>
                        <p>Reliability: retries, endpoint fallback, and rate-limit awareness.</p>
                    </article>

                    <article className="card">
                        <h2>2) Postgres Data Core</h2>
                        <p>All core data lands in one place: raw bars, engineered features, run summaries, and trade logs.</p>
                        <p>
                            Tables include <code>ohlcv_bars</code>, <code>feature_bars</code>, <code>backtest_runs</code>, and
                            <code> backtest_trades</code>.
                        </p>
                    </article>

                    <article className="card">
                        <h2>3) Daily Analysis Email</h2>
                        <p>A scheduled analysis worker generates a daily report, appends an LLM analysis section, and sends it by email.</p>
                        <p>Result: concise insights, risks, and next-step experiments every day.</p>
                    </article>
                </section>

                <section className="card" style={{ marginTop: 14 }}>
                    <h2>How It Thinks About Trading</h2>
                    <ul>
                        <li>Classifies volatility into low / medium / high regimes.</li>
                        <li>Switches strategy behavior between trend and mean-reversion conditions.</li>
                        <li>Backtests rule sets with fees and position transitions.</li>
                        <li>Runs Monte Carlo simulations for drawdown and tail-risk estimates.</li>
                    </ul>
                </section>

                <section className="actions">
                    <a href="/api/health" className="button">
                        Check App Health
                    </a>
                    <span className="subtle">Built to explain the system clearly — and invite better strategy iteration.</span>
                </section>
            </div>
        </main>
    );
}
