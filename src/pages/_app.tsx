/* eslint-disable @typescript-eslint/quotes */
import type { AppProps } from 'next/app';
import { Fira_Code } from '@next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/Header';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${firaCode.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
