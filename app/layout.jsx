import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisclaimerModal from "../components/DisclaimerModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated with your actual firm details for browser tabs and Google Search!
export const metadata = {
  title: "RL Associates | Advocates & Legal Consultants",
  description: "Led by Dr. Jagdish Kumar Prajapat. Trusted legal services across civil, criminal, corporate and regulatory matters. Practical counsel with a client-first approach.",
  icons: {
    icon: '/jag.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added antialiased back, and set default text to a light color so it's readable on the dark red background */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-950 text-gray-100`}> 
        <a href="#main" className="sr-only focus:not-sr-only sr-only-focusable">Skip to content</a>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main id="main" className="flex-1 w-full mx-auto max-w-7xl px-6 py-8">
            {children}
          </main>

          <Footer />
          <DisclaimerModal />
        </div>
      </body>
    </html>
  );
}