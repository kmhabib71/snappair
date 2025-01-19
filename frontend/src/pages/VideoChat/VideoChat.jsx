import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
function VideoChat() {
  // ................Responsiveness....................
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
    ? `"localVideo localVideo localVideo"
       "remoteVideo remoteVideo remoteVideo"
       "likeButton msgAdd loveButton"
       "translationCard translationCard translationCard"
       "startChat nextButton reportButton"
       "messageBox messageBox leaderBoard"`
    : `"localVideo remoteVideo leaderBoard leaderBoard"
       "localVideo remoteVideo startChat startChat"
       "localVideo remoteVideo likeButton likeButton"
       "localVideo remoteVideo loveButton loveButton"
       "messageBox messageBox translationCard translationCard"
       "messageBox messageBox reportButton reportButton"
       "msgWrite msgWrite nextButton nextButton"`;
  // ................End Responsiveness....................
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        className="flex-grow grid gap-1 md:gap-3 md:m-2 m-0"
        style={{
          gridTemplateAreas: gridTemplate,
          gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "3.8fr 3.8fr 1fr 1fr",
          gridTemplateRows: isMobile
            ? "3fr 3fr 0.8fr 0.8fr 1fr 0.4fr"
            : "1fr 1fr 1fr 1fr 2fr 1fr 1fr",
        }}
      >
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "localVideo" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LocalVideo
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "remoteVideo" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          remoteVideo
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] max-w-[75%] md:max-w-[100%]"
          style={{ gridArea: "messageBox" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          messageBox
        </motion.div>
        <motion.div
          className="hidden md:grid bg-gray-400 rounded-[5px] "
          style={{
            gridArea: "msgWrite",
            gridTemplateAreas: `
            "msgInput msgSendButton msgAdd"
            
          `,
            gridTemplateRows: "1fr ",
            gridTemplateColumns: "6fr 1fr 1fr",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className=" bg-gray-400 rounded-[5px] "
            style={{ gridArea: "msgInput" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            msgWrite
          </motion.div>
          <motion.div
            className=" bg-gray-400 rounded-[5px] "
            style={{ gridArea: "msgSendButton" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            msgSendButton
          </motion.div>
          <motion.div
            className=" bg-gray-400 rounded-[5px] "
            style={{ gridArea: "msgAdd" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            msgAdd
          </motion.div>
        </motion.div>
        <motion.div
          className="md:hidden bg-gray-400 rounded-[5px] "
          style={{ gridArea: "msgAdd" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          msgAdd
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "startChat" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          startChat
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] justify-self-end md:justify-self-auto min-w-[150%] md:min-w-[100%]"
          style={{ gridArea: "leaderBoard" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LeaderBoard
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "likeButton" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          likeButton
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "loveButton" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          loveButton
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "translationCard" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Translation Card
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "reportButton" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          reportButton
        </motion.div>
        <motion.div
          className="bg-gray-400 rounded-[5px] "
          style={{ gridArea: "nextButton" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          nextButton
        </motion.div>
      </div>
    </div>
  );
}

export default VideoChat;
