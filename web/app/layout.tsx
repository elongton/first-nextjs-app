import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Crypto Lab — First Next.js App",
    description:
        "A guided tour of the Crypto Lab stack: data collector, Postgres analytics pipeline, and daily LLM email reporting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
