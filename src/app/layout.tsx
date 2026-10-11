import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Marque from "@/components/shared/Marque";
import NavList from "@/components/shared/NavList";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import NavListSkeleton from "@/components/All-Skeleton/NavListSkeleton";
import MarqueSkeleton from "@/components/All-Skeleton/MarqueSkeleton";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla Bulletin",
  description: "সর্বশেষ বাংলা খবর, রাজনীতি, অর্থনীতি, খেলা ও আরও অনেক কিছু",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <Header />
        <Suspense fallback={<NavListSkeleton />}>
          <NavList />
        </Suspense>
        <Suspense fallback={<MarqueSkeleton />}>
          <Marque />
        </Suspense>

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
