import { Urbanist, Nunito } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Modal from "@/components/modals/modal";
import ClientOnly from "@/components/client-only";
import RegisterModal from "@/components/modals/register-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Big Break Marina",
  description: "Nature inside City Center.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <ClientOnly>
          {/* <Modal title='Hello' actionLabel='Submit' isOpen/> */}
          <RegisterModal />
        </ClientOnly>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/43689572.js"
        ></script>
        {/* <!-- End of HubSpot Embed Code --> */}
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/43689572.js"
        ></script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  );
}
