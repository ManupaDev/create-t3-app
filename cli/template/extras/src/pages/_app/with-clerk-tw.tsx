import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <div className={geist.className}>
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
};

export default MyApp;
