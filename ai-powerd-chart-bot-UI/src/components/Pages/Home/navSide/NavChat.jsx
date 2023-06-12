import React from "react";
import { GoTrashcan } from "react-icons/go";

const NavChat = ({ currentTitles, onHandleChat, onDeleteHandler }) => {
  return (
    <>
      {currentTitles?.map((title, index) => (
        <div
          className="sideMenuButton"
          key={index}
          onClick={() => {
            onHandleChat(title);
          }}
        >
          {title}
          <GoTrashcan
            className="trash-can"
            onClick={() => onDeleteHandler(title)}
          />
        </div>
      ))}
    </>
  );
};

export default NavChat;
