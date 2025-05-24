import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogPage from "./Educate/Educate";

import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Blogsite from "./Educate/Blogsite";
import Govsite from "./Educate/govsite.";
import EventPage from "./Educate/event";
import Ai from "./Educate/ai";




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
        <Route path="/about" element={<Govsite></Govsite>} />
        <Route path="/ai" element={<Ai></Ai>} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Toaster />
    </div>

  );
}


export default App;