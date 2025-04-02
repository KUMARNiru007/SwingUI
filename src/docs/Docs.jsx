import React from "react";
import { Routes, Route } from "react-router"; // ✅ Use react-router-dom
import Sidebar from "../components/Sidebar";
import Installation from "./Installation";
import Components from "./Components";
import CDN from "./CDN";
import Utilities from "./Utilities";
import Button from "./components/Button/Button";

const Docs = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content (No max-width) */}
      <div className="flex-1 flex flex-col px-6">
        <div className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <Routes>
            <Route index element={<Installation />} /> {/* ✅ Default to Installation */}
            <Route path="cdn" element={<CDN />} />
            <Route path="installation" element={<Installation />} />
            <Route path="components" element={<Components />} />
            <Route path="utilities" element={<Utilities />} />
            <Route path="components/button" element={<Button />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Docs;
