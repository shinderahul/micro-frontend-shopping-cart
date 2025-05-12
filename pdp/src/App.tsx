import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl bg-amber-100">
    <Header />
    <div className="my-10">Home Page Content</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);