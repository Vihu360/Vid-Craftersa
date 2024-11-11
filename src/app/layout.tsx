import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
			<html lang="en">
      <body
        className={poppins.className}
			>
				{children}
				<Toaster />
      </body>
			</html>
  );
}
