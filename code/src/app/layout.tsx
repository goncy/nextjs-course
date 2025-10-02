import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurancy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto_1fr_auto] px-4">
        <header className="text-xl leading-[3rem] font-bold">Restaurancy</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
