/* "use client"; */

import "@styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Aldo Femat Fitness App",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <body>
          <div width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
        </head>
    </html>
  );
};
export default RootLayout;
