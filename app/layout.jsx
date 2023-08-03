/* "use client"; */

import "@styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

export const metadata = {
  title: "Aldo Femat Fitness App",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body>
          <div className="w-400 mx-auto xl:w-1488">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </Head>
    </html>
  );
};
export default RootLayout;
