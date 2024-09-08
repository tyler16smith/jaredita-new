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
import { useRouter } from "next/router";
import { useMemo } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const hideNavbarRoutes = ['/login'];
const hideFooterRoutes = ['/login'];

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const router = useRouter()

  const hideNavbar = useMemo(() =>
    hideNavbarRoutes.includes(router.pathname),
    [router.pathname])

  const hideFooter = useMemo(() =>
    hideFooterRoutes.includes(router.pathname),
    [router.pathname])

  return (
    <Theme>
      <main className={`font-sans ${inter.variable} bg-gray-50 min-h-screen max-w-screen w-full relative`}>
        <DocumentHeader />
        <Toaster position="top-right" reverseOrder={false} />
        {!hideNavbar && <Navbar />}
        <div className="min-h-[calc(100vh-500px)] min-h-[85vh] p-3 md:p-5">
          <div className='flex justify-center items-center w-full pb-20'>
            <div className='w-full max-w-[1000px] flex flex-col justify-center items-center mt-3'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
        {!hideFooter && <Footer />}
      </main>
    </Theme>
  );
};

export default api.withTRPC(MyApp);
