import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"Kabir Media Downloader", description:"Download published media in the formats you need." };
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
