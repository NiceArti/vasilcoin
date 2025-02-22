import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Vasilcoin | Самый стильный мемтокен в TON",
  description: "Vasilcoin - это не просто токен, это стиль жизни в сети TON. Присоединяйтесь к сообществу самого модного и позитивного мемтокена, который дарит улыбки и счастье своим держателям.",
  // Основные мета-теги
  keywords: "Vasilcoin, TON, мемтокен, криптовалюта, стиль, The Open Network, токен TON",
  authors: [
    {
      name: "Vasilcoin Team",
    }
  ],

  // Open Graph мета-теги для соцсетей
  openGraph: {
    title: "Vasilcoin - Стильный мемтокен в сети TON",
    description: "Присоединяйтесь к самому модному крипто-комьюнити в TON. Vasilcoin - токен, который приносит стиль и дарит счастье.",
    type: "website",
    locale: "ru_RU",
    siteName: "Vasilcoin",
    images: [
      {
        url: "/images/vasilcoin-og.png", // Путь к OG изображению
        width: 1200,
        height: 630,
        alt: "Vasilcoin - стильный мемтокен",
      }
    ],
  },

  // Twitter карточка
  twitter: {
    card: "summary_large_image",
    title: "Vasilcoin 💎 Самый стильный токен в TON",
    description: "Модный аксессуар крипторынка теперь в TON. Добавь стиля своему портфелю!",
    images: ["/images/vasilcoin-og.png"], // Путь к Twitter изображению
  },

  // Дополнительные мета-теги
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",


  alternates: {
    canonical: "https://vasilcoin.io",
  },
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}

