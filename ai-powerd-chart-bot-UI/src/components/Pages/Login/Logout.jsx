import React, { useContext } from "react";
import "./Login.css";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../server/fireBaseConfig";
import { AuthContext } from "../../ContextStore/AuthContext";
import { Link } from "react-router-dom";

const NavLinks = ({ text, setChatLog }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = async (text) => {
    if (text === "Log out") {
      try {
        let logOut = await signOut(auth);
        setChatLog([]);
        console.log("logOut", logOut);
        dispatch({ type: "LOGOUT" });
      } catch (error) {
        console.log("error happen during sign out", error);
      }
    }
  };

  return (
    <Link
      to="/"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
      onClick={() => handleClick(text)}
    >
      <div className="sideMenuButton logout">
        <div>
          <FiLogOut />
        </div>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default NavLinks;
