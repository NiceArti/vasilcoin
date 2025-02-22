import { Nunito } from "next/font/google";
import { getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';
import "../globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string}
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${nunito.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
