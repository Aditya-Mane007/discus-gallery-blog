import "@/styles/globals.css";
import Navbar from "./UI/Components/Navbar/Navbar";
import Footer from "./UI/Components/Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const NavbarContext = createContext();

export default function App({ Component, pageProps }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollY);
      window.scrollY > 12 ? setIsSticky(true) : setIsSticky(false);
    });
  }, []);

  return (
    <NavbarContext.Provider value={isSticky}>
      <div className="flex flex-col min-h-screen">
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>
        <main className="flex-1 h-full">
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </NavbarContext.Provider>
  );
}
