import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GridTemplateAreasLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridTemplate = isMobile
    ? `"nav"
       "sidebar"
       "main"
       "content1"
       "content2"
       "content3"
       "footer"`
    : `"nav nav nav nav"
       "sidebar main main main"
       "sidebar content1 content2 content3"
       "sidebar footer footer footer"`;

  return (
    <div
      className="grid h-screen gap-2 text-center text-teal-900 font-bold uppercase text-[12px]"
      style={{
        gridTemplateAreas: gridTemplate,
        gridTemplateColumns: isMobile ? "1fr" : "4fr 1fr 3fr 3fr",
        gridTemplateRows: isMobile
          ? "auto auto auto auto auto auto auto"
          : "auto 1fr 1fr auto",
      }}
    >
      {/* Navbar */}
      <motion.nav
        className="bg-teal-100 rounded-[5px] py-[5px]"
        style={{ gridArea: "nav" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Navbar
      </motion.nav>

      {/* Sidebar */}
      <motion.div
        id="sidebar"
        className="bg-cyan-200 rounded-[5px] py-[5px]"
        style={{ gridArea: "sidebar" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sidebar
      </motion.div>

      {/* Main Content */}
      <motion.main
        className="bg-cyan-300 rounded-[5px] py-[5px]"
        style={{ gridArea: "main" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Main
      </motion.main>

      {/* Content1 */}
      <motion.div
        id="content1"
        className="bg-teal-300 rounded-[5px] py-[5px]"
        style={{ gridArea: "content1" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Content1
      </motion.div>

      {/* Content2 */}
      <motion.div
        id="content2"
        className="bg-teal-400 rounded-[5px] py-[5px]"
        style={{ gridArea: "content2" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Content2
      </motion.div>

      {/* Content3 */}
      <motion.div
        id="content3"
        className="bg-green-300 rounded-[5px] py-[5px]"
        style={{ gridArea: "content3" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Content3
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="bg-teal-500 rounded-[5px] py-[5px]"
        style={{ gridArea: "footer" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Footer
      </motion.footer>
    </div>
  );
};

export default GridTemplateAreasLayout;
