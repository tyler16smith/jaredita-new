import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import DocumentHeader from "@/components/DocumentHeader";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar/Main";
import Footer from "@/components/Footer";

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
      <main className={`font-sans ${inter.variable} bg-gray-50 min-h-screen max-w-screen w-full relative`}>
        <DocumentHeader />
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <div className="min-h-[calc(100vh-500px)] min-h-[85vh] p-3 md:p-5">
          <div className='flex justify-center items-center w-full pb-20'>
            <div className='w-full max-w-[1000px] flex flex-col justify-center items-center mt-3'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Theme>
  );
};

export default api.withTRPC(MyApp);
