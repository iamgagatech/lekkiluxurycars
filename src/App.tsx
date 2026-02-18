import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { Home } from "./pages/Home";
import { Inventory } from "./pages/Inventory";
import { CarDetails } from "./pages/CarDetails";
import { Sell } from "./pages/Sell";
import { Contact } from "./pages/Contact";

type Page = "home" | "inventory" | "car-details" | "sell" | "contact";

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentCarId, setCurrentCarId] = useState<number>(1);

  const navigate = (page: string, carId?: number) => {
    setCurrentPage(page as Page);
    if (carId !== undefined) setCurrentCarId(carId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle browser back/forward (basic history support)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1) as Page;
      if (hash) setCurrentPage(hash);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "inventory":
        return <Inventory onNavigate={navigate} />;
      case "car-details":
        return <CarDetails carId={currentCarId} onNavigate={navigate} />;
      case "sell":
        return <Sell onNavigate={navigate} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <FloatingButtons onNavigate={navigate} />
    </div>
  );
}
