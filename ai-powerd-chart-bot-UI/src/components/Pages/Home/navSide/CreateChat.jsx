import React from "react";
let chat = 2;
const CreateChat = ({ setChatTitle, setInputPrompt }) => {
  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        setInputPrompt("");
        setChatTitle(`Chat- ${chat++}`);
      }}
    >
      <span>+ New chat</span>
    </div>
  );
};

export default CreateChat;
