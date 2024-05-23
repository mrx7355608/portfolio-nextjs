import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fawad Imran",
  description: "Portfolio built with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "black" }}>
      <body className={inter.className} style={{ background: "black" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
