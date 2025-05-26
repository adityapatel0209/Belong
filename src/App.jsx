import React from "react";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/educate/Educate";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Blogsite from "./pages/educate/Blogsite";
import Govsite from "./pages/about/govresource";
import EventPage from "./pages/events/event";
import Ai from "./pages/ai/ai";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="bg-background text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educate" element={<BlogPage />} />
        <Route path="/educate/:slug" element={<Blogsite />} />
        <Route path="/about" element={<Govsite />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventPage />} />
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;