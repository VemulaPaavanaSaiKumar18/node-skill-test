import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import TypingText from "../../utils/TypingText";
import Error from "../../utils/Error";
import NavContent from "./navSide/NavContent";
import Loading from "../../utils/Loading";
import LogOut from "../Login/Logout";
import "./Home.css";

const Home = () => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [chatTitle, setChatTitle] = useState("Chat-1");
  const [err, setErr] = useState(false);
  const [responseFromAPI, setResponseFromAPI] = useState(false);

  const chatLogRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const callAPI = async () => {
      try {
        const response = await fetch("http://localhost:4000/api-dev/message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputPrompt }),
        });
        const data = await response.json();
        console.log("data.botResponse", data.botResponse);
        setChatLog([
          ...chatLog,
          {
            title: chatTitle,
            chatPrompt: inputPrompt,
            botMessage: data.botResponse,
          },
        ]);
        setErr(false);
      } catch (err) {
        setErr(err);
        console.log(err);
      }
      setResponseFromAPI(false);
    };

    if (!responseFromAPI) {
      if (inputPrompt.trim() !== "") {
        setChatLog([...chatLog, { chatPrompt: inputPrompt }]);
        callAPI();
        setResponseFromAPI(true);

        e.target.querySelector("input").blur();
      }
    }

    setInputPrompt("");
  };
  const currentChatObject = chatLog.filter(
    (chart) => chart.title === chatTitle
  );

  const currentTitles = Array.from(
    new Set(chatLog.map((chartTitle) => chartTitle.title))
  );

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    return () => {};
  }, []);

  return (
    <div className="chatSpace">
      <aside className="sideMenu">
        <NavContent
          chatLog={chatLog}
          setChatLog={setChatLog}
          currentTitles={currentTitles}
          setChatTitle={setChatTitle}
          setInputPrompt={setInputPrompt}
        />
      </aside>

      <section className="chatBox">
        {currentChatObject.length > 0 ? (
          <div className="chatLogWrapper">
            {chatLog.length > 0 &&
              currentChatObject.map((chat, idx) => (
                <div className="chatLog" key={idx} ref={chatLogRef}>
                  <div className="chatPromptWrapper">
                    <div>
                      <FaUserCircle />
                    </div>
                    {chat.chatPrompt}
                  </div>

                  <div className="botMessageMainContainer">
                    <div className="botMessageWrapper">
                      <div>
                        <FaRobot />
                      </div>
                      {chat.botMessage ? (
                        <div id="botMessage">
                          <TypingText text={chat.botMessage} />
                        </div>
                      ) : err ? (
                        <Error err={err} />
                      ) : (
                        <Loading />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <h1>WELCOME TO AI POWERED CHAT BOT</h1>
        )}

        <form onSubmit={handleSubmit}>
          <div className="inputPromptWrapper">
            <input
              name="inputPrompt"
              className="inputPrompttTextarea"
              type="text"
              rows="1"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              autoComplete="off"
            ></input>
            <button aria-label="form submit" type="submit">
              →
            </button>
          </div>
        </form>
        <LogOut text={"Log out"} setChatLog={setChatLog} />
      </section>
    </div>
  );
};

export default Home;
