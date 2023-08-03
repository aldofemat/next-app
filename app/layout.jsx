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
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <body>
          <div className="w-400 mx-auto xl:w-1488">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      
    </html>
  );
};
export default RootLayout;
