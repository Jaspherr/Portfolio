import './globals.css';
import { ThemeProvider } from '@/app/theme-provider';

export const metadata = {
  title: 'Jaspher Tania',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}