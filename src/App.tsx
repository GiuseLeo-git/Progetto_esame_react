
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter";
import { SearchProvider } from "./components/SearchContext";
import "./App.css";
import type { SetStateAction } from "react";


function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Navbar darkMode={false} setDarkMode={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }} fontSize={0} setFontSize={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }} />
        <AppRouter />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
