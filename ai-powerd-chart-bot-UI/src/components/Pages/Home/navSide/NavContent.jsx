import React from "react";
import CreateChat from "./CreateChat";
import NavChat from "./NavChat";

const NavContent = ({
  setInputPrompt,
  chatLog,
  setChatTitle,
  currentTitles,
  setChatLog,
}) => {
  const handleChat = (uniqueTitle) => {
    setChatTitle(uniqueTitle);
  };
  const deleteHandler = (uniqueTitle) => {
    setChatLog(chatLog.filter((chart) => chart.title !== uniqueTitle));
  };
  return (
    <>
      <CreateChat setChatTitle={setChatTitle} setInputPrompt={setInputPrompt} />
      <NavChat
        currentTitles={currentTitles}
        onHandleChat={handleChat}
        onDeleteHandler={deleteHandler}
      />
    </>
  );
};

export default NavContent;
