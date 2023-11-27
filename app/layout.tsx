import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <body className="w-screen max-w-screen h-screen min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
