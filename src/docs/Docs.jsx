import React from "react";
import { Routes, Route } from "react-router";
import Sidebar from "../components/Sidebar";

// Main Sections
import Installation from "./Installation";
import Components from "./Components";
import CDN from "./CDN";
import Utilities from "./Utilities";

// SwingKit
import Gradients from "./SwingKit/Gradients/Gradients";
import AnimatedGradients from "./SwingKit/AnimatedGradients/AnimatedGradients";
import Transitions from "./SwingKit/Transitions/Transitions";

// Forms
import Login from "./Forms/Login/Login";
import Register from "./Forms/Register/Register";
import Newsletter from "./Forms/Newsletter/Newsletter";
import Contact from "./Forms/ContactUs/ContactUs";
import QuickStart from "./Getting-Started/QuickStart";

const Docs = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      <div className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col px-6">
        <div className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <Routes>
            {/* Main */}
            <Route index element={<QuickStart/>} />
            <Route path="quick-start" element={<QuickStart/>} />
            <Route path="cdn" element={<CDN />} />
            <Route path="installation" element={<Installation />} />
            <Route path="components/*" element={<Components />} />
            <Route path="utilities" element={<Utilities />} />

            {/* SwingKit */}
            <Route path="swingkit/gradients" element={<Gradients />} />
            <Route path="swingkit/animated-gradients" element={<AnimatedGradients />} />
            <Route path="swingkit/transitions" element={<Transitions />} />

            {/* Forms */}
            <Route path="forms/login" element={<Login />} />
            <Route path="forms/register" element={<Register />} />
            <Route path="forms/newsletter" element={<Newsletter />} />
            <Route path="forms/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Docs;
