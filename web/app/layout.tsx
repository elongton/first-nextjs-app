import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crypto Lab — First Next.js App",
    description:
        "A guided tour of the Crypto Lab stack: data collector, Postgres analytics pipeline, and daily LLM email reporting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "Inter, system-ui, sans-serif", margin: 0, background: "#0b1020", color: "#e6edf7" }}>
                {children}
            </body>
        </html>
    );
}
