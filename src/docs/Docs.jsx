import React from "react";
import { Routes, Route } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Installation from "./Installation";
import CDN from "./CDN";
import Components from "./Components";
import Utilities from "./Utilities";
import ButtonDocs from "./Button";

const Docs = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Installation />} />
            <Route path="/cdn" element={<CDN />} />
            <Route path="/components" element={<Components />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/button" element={<ButtonDocs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Docs;
