import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "../SwingKit/Gradients/style.css"
import templateBg from "./Assets/Screenshot 2025-04-18 192654.png"; 
import BottomFooter from "../../components/BottomFooter";


const TemplateDashboard = () => {
  const { darkMode } = useTheme();

  const containerClass = `min-h-screen ${
    darkMode
      ? "bg-[var(--dark-bg)] text-[var(--color-text-dark)]"
      : "bg-[var(--light-bg)] text-[var(--color-text)]"
  } p-8`;
  const cardStyle = {
    backgroundImage: `url(${templateBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  

  const cardClass =
    "relative group border border-gray-600 rounded-xl bg-[url('./Assets/Screenshot 2025-04-18 192654.png')] p-6  hover:border-white hover:shadow-2xl transition duration-300 flex items-center justify-center h-72 w-full text-center";

  const titleClass =
    "text-xl font-semibold z-10 group-hover:opacity-20 transition-opacity duration-300";

  const buttonGroupClass =
    "absolute inset-0 flex flex-col items-center justify-end pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300";

    const buttonStyle1 =
    "px-5 py-2 rounded-full bg-gradient-radial from-gray-700/40 via-gray-600/10 to-transparent text-white font-medium border border-white/30 hover:bg-white hover:text-black transition-all duration-300 ease-in-out backdrop-blur-sm";
    const buttonStyle2 =
    "px-5 py-2   rounded-full swing-ocean-gradient hover:swing-ocean-gradient text-white font-medium hover:bg-gray-200 transition";


  return (
    <div className={containerClass}>
      <main className="rounded-2xl p-8 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Pre-Build Templates</h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* Card 1 */}
          <div className={cardClass} style={cardStyle}>
            <h3 className={titleClass}></h3>
            <div className={buttonGroupClass}>
              <div className="flex space-x-4">
                <button className={buttonStyle1}>Copy Code</button>
                <button className={buttonStyle2}>Preview</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={cardClass} style={cardStyle}>
            <h3 className={titleClass}></h3>
            <div className={buttonGroupClass}>
              <div className="flex space-x-4">
                <button className={buttonStyle1}>Copy Code</button>
                <button className={buttonStyle2}>Preview</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={cardClass} style={cardStyle}>
            <h3 className={titleClass}></h3>
            <div className={buttonGroupClass}>
              <div className="flex space-x-4">
                <button className={buttonStyle1}>Copy Code</button>
                <button className={buttonStyle2}>Preview</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={cardClass} style={cardStyle}>
            <h3 className={titleClass}></h3>
            <div className={buttonGroupClass}>
              <div className="flex space-x-4">
                <button className={buttonStyle1}>Copy Code</button>
                <button className={buttonStyle2}>Preview</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomFooter/>
    </div>
  );
};

export default TemplateDashboard;
