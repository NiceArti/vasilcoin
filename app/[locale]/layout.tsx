import { Nunito } from "next/font/google";
import { getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {
  const resolvedParams = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(resolvedParams.locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale}>
      <body
        className={`${nunito.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
