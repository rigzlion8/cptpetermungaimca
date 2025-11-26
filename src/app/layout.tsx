import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Peter Mungai - A Mandate for Ndenderu Ward",
  description: "Hon. Peter Mungai - Member of County Assembly Candidate for Ndenderu Ward, Kiambaa Constituency, Kiambu County. 2027 General Elections campaign focused on infrastructure, community empowerment, and accountability.",
  keywords: "Peter Mungai, MCA, campaign, Ndenderu Ward, Kiambaa Constituency, Kiambu County, 2027 elections, politics, development",
  authors: [{ name: "Peter Mungai MCA Campaign Team" }],
  openGraph: {
    title: "Peter Mungai - A Mandate for Ndenderu Ward",
    description: "Join us in building a better future for Ndenderu Ward, Kiambaa Constituency, Kiambu County.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
