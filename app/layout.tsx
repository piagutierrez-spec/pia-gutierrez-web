import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pía Gutiérrez Sasaky",
  description:
    "Página personal de Pía Gutiérrez Sasaky con una presencia editorial, cálida y contemporánea.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
