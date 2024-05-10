import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import DocumentHeader from "@/components/DocumentHeader";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Theme>
      <main className={`font-sans ${inter.variable} bg-white min-h-screen w-screen overflow-y-auto`}>
        <DocumentHeader />
        <Toaster position="top-right" reverseOrder={false} />
        <Component {...pageProps} />
      </main>
    </Theme>
  );
};

export default api.withTRPC(MyApp);
