import type { Metadata } from "next";
import "../assets/css/main.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export const metadata: Metadata = {
  title: "Ofriend",
  description: "Ofriend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative overflow-x-hidden">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
