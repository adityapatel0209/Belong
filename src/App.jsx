import React from "react";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/educate/Educate";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Blogsite from "./pages/educate/Blogsite";
import GovResourcePage from "./pages/about/govresource";
import EventPage from "./pages/events/event";
import Ai from "./pages/ai/ai";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/educate"
          element={<BlogPage />}
        />
        <Route
          path="/educate/:slug"
          element={<Blogsite />}
        />
        <Route path="/about" element={<GovResourcePage />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;