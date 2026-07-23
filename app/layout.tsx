import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4023905114573020');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4023905114573020&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
