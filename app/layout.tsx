import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-body", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "+250 Dinâmicas de Futebol Prontas | TreinoPro",
  description: "Dinâmicas organizadas, Área VIP e bônus para treinos de futebol mais produtivos, divertidos e profissionais.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "+250 Dinâmicas de Futebol Prontas",
    description: "Treinos melhores. Em menos tempo.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "+250 Dinâmicas de Futebol Prontas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${oswald.variable}`}>{children}</body></html>;
}
